import ImageWithPlayIcon from './ImageWithPlayIcon';

const TabContent = ({ content }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start mt-6">
    {/* Image with Play Icon */}
    <ImageWithPlayIcon
      imageUrl={content.imageUrl}
      playIconUrl={content.playIconUrl}
      altText={content.title}
    />

    {/* Text Container */}
    <div className="text-container-v ml-0 md:ml-8 text-left mt-4 md:mt-0">
      <p className="text-xl font-semibold text-gray-800">{content.description}</p>
      <ul className="mt-4 space-y-2 text-gray-700">
        {content.points.map((point, index) => (
          <li key={index} className="flex items-center">
            <img
              src="https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/web-invoicing/check_mark_icon.svg"
              alt="check mark icon"
              width="16"
              height="16"
              className="mr-2"
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TabContent;
