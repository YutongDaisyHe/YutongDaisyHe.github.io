// utils/imageImporter.js

/**
 * Import all images from a specified directory.
 * @param {string} directory - The relative directory path from which to import images.
 * @returns {Object} An object containing all imported images.
 */
export function importAllImages(directory) {
    let images = {};
    // Dynamically require all images from the directory
    const importAll = (requireContext) => requireContext.keys().forEach((key) => {
        images[key.replace('./', '')] = requireContext(key);
    });
    try {
        importAll(require.context(`../static/${directory}/`, false, /\.(png|jpe?g|svg)$/));
    } catch (error) {
        console.error('Error importing images:', error);
    }
    return images;
}
