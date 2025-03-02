const DropdownContent = (props) => {
    return (
        <ul>
            {
                props.items.map((item, i) => <li key={i}>{item}</li>)
            }
        </ul>
    )
}

export default DropdownContent;