module.exports = function(eleventyConfig) {
    // Copy the `img/` directory 
    eleventyConfig.addPassthroughCopy("./img");
    
    // Copy the `css/fonts/` directory
    // If you use a subdirectory, it’ll copy using the same directory structure.
    // eleventyConfig.addPassthroughCopy("css/fonts");
    return {
      passthroughFileCopy: true
    };
  };

