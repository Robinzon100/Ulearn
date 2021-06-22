export const displayVideoNames = (e,setDisplayName) => {
    const currentVideo = e.currentTarget.attributes["data-title"];
    
    if (currentVideo) {
      const subVideoNames = e.currentTarget.attributes["data-title"].nodeValue;

      setDisplayName(subVideoNames);
    }
};