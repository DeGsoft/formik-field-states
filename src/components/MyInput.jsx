export const MyInput = ({ field, form: { touched, errors }, ...props }) => {
    return (
        <div>
            <input type="text" {...field} {...props} />
            {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
    );
}