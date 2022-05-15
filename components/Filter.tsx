export const Filter = ({name, onChange, options }:any) => {
    return (
        <select
        className="text-gray-600 text-lg p-2.5 pr-6 border-2 rounded-lg bg-gray-100"
        name={name}
        id={name}
        onChange={onChange}>
        <option value={""} className="text-gray-600">
          any
        </option>
        {options.map((status:any) => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    )
}