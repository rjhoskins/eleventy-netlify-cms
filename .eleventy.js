module.exports = function(eleventyConfig) {
    // Copy the `img/` directory 
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("admin");


    // example of custom collection manipulation
    eleventyConfig.addCollection("testimoniesSorted", collection => {
      return collection.getAllSorted("testimonies");

    });
    
    return {
      passthroughFileCopy: true
    };
  };

