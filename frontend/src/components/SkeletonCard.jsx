import "../styles/skeleton.css";

function SkeletonCard(){

return(

<div className="skeleton-card">

<div className="skeleton-thumb shimmer"></div>

<div className="skeleton-row">

<div className="skeleton-avatar shimmer"></div>

<div className="skeleton-content">

<div className="skeleton-line large shimmer"></div>

<div className="skeleton-line medium shimmer"></div>

<div className="skeleton-line small shimmer"></div>

</div>

</div>

</div>

);

}

export default SkeletonCard;
