const ItemList = ( )  => {
const items = ["React", "Vue", "Angular", "Java", "C++", "Svelve"]
return(
    <ul>
    {items.map((item, index )=> (
        <li key={index}>{index}</li>
    ))}
    </ul>
)
}
export default ItemList