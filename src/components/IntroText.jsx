import React from 'react';
import { ReactTyped } from 'react-typed';

function IntroText() {
  return (
    <h1 className="text-center text-3xl md:text-5xl font-bold uppercase text-[#ddd] mt-5">
      <ReactTyped
        strings={[
          "Hi, I'm Adeshina Adegbite",
          'Frontend Developer',
          'Tech Enthusiast',
        ]}
        typeSpeed={40}
        backSpeed={40}
        backDelay={1500}
        loop={true}
        showCursor={true}
        cursorChar="|"
      />
    </h1>
  );
}

export default React.memo(IntroText);
