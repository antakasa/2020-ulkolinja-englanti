import compact from 'lodash.compact';
import pickBy from 'lodash.pickby';
import CMSData from '../data/**/*.json';
const processData = () => {
  const data = [];
  const {slides, displayOrder} = CMSData;
  console.log(slides);
  displayOrder.data.map(e => {
    const id = e.collectionName;
    const pickedFromSlides = pickBy(
      slides,
      e => e.id.toUpperCase() === id.toUpperCase(),
    );
    const objectData = pickedFromSlides[Object.keys(pickedFromSlides)[0]];
    data.push(objectData);
  });
  return compact(data);
};

export default processData;
