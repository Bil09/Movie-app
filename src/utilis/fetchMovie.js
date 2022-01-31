

const fetchMovie = async (url) => {
   try{
      const response = await fetch(url);
      const data = await response.json();
      console.log(`FETCH WITH URL`);
      return data;
   } catch (err){
      console.log(err);
   }
};
export default fetchMovie;