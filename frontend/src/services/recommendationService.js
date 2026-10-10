const recommendationService = {

  getRecommendations:

  (
    allProperties,
    currentProperty
  ) => {

    return allProperties.filter(
      property =>

      property.city ===
      currentProperty.city

      &&

      property._id !==
      currentProperty._id
    );

  }

};

export default
recommendationService;