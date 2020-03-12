
var Movie = function (faker) {
  var self = this;


  self.genre = function() {
      return faker.random.arrayElement(faker.definitions.Movie.genre);
  };

  
  self.director = function() {
      return faker.random.arrayElement(faker.definitions.Movie.director);
  };


  return self;
};

module['exports'] = Movie;