import { ChevronRightIcon } from "@heroicons/react/solid";

const VideoCard = ({ person }) => {
  return (
    <div className="px-4 flex flex-col">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <iframe
          className="w-full md:aspect-[20/9] aspect-[16/10] mx-auto"
          src={person.youtubeLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-center font-medium py-4 text-2xl lg:text-3xl">
        {person.name}
      </p>
      <p className="text-center font-[100] pb-6 text-[14px] lg:text-base mx-8">
        {person.details}
      </p>
      <div className="w-full py-2 mx-auto md:w-[60%] flex justify-center">
        <a
          href={person.youtubeLink}
          target="_blank"
          rel="noreferrer"
          className="bttn bttn-primary flex items-center gap-2 mx-8"
        >
          <span className="text-[14px] lg:text-base">
            {person.btnDescription}
          </span>
          <ChevronRightIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
