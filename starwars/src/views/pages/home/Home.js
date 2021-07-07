import HomeSectionOne from '../../components/sections/HomeSectionOne.js';
import HomeSectionTwo from '../../components/sections/HomeSectionTwo.js';
import FloatImage from '../../components/float/FloatImage.js';
import Index from '../../components/footer/Index.js';

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${FloatImage}
            ${Index}
          </div>
      `;
      return view
  },

  after_render: async () => {}
}

export default Home;