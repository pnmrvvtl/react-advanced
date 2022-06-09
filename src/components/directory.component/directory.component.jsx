import CategoryItem from "../category-item.component/category-item.component";

const Directory = (props) => {
    return (
        <div className="categories-container">
            {props.categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>)
}
export default Directory