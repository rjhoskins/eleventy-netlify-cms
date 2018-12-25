module.exports = function(eleventyConfig) {
    // Copy the `img/` directory 
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    
    return {
      passthroughFileCopy: true
    };
  };

