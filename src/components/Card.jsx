function Card(props) {
  return (
    <div className="block p-6 border border-gray-200 max-w-sm rounded-lg overflow-hidden shadow-lg">
      {props.children}
    </div>
  );
}

export default Card;
