type ButtonNavBarProps = {
  label: string
  className?: string
}

const classNameStyleButtonNavBar='hover:bg-red-100 p-2 rounded-sm cursor-pointer hover:font-semibold duration-300 ease-in-out'

export function ButtonNavBar ( { label, className }: ButtonNavBarProps ) {
    return (
        <button className={`${className} ${classNameStyleButtonNavBar}`}>
            {label}
        </button>
    )
}