import SkeletonCard from "./SkeletonCard";

function SkeletonGrid(){

return(

<div className="video-grid">

{

Array.from({length:12}).map((_,i)=>

<SkeletonCard key={i}/>

)

}

</div>

);

}

export default SkeletonGrid;
