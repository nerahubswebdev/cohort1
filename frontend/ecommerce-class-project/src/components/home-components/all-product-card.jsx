const AllProductCard = ({ miles }) => {
  console.log("props from products => ", props.miles);
  return (
    <div>
      <p>{miles?.title}</p>
      <img src={miles.image} />
    </div>
  );
};

export default AllProductCard;
