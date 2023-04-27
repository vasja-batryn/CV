import React from 'react';

export const Blog = (props) => {
  return (
    <div className="wrapper wrapper_centered flex-col container mx-auto">
  
      <div className="blog_block">
        <h3 className="header mt-10">
          <span className="header header_span">First test title here for better understanding</span>
        </h3>
        <p className="paragraph paragraph_third my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tincidunt nibh mollis, tempor dolor id, venenatis ex. Aenean convallis
          tellus id purus posuere aliquet. Fusce quis imperdiet libero. Nullam
          nec massa bibendum, laoreet est eu, aliquet elit. Pellentesque
          malesuada volutpat lacinia. Maecenas euismod lectus at mi dapibus, non
          egestas dui ullamcorper.
        </p>
      </div>

    </div>
  );
};
