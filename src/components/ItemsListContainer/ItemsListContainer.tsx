type ItemsListContainerProps = {
    label: string
    className?: string
}

const classNameStyleItemsListContainer = 'flex items-center justify-center'

export function ItemsListContainer ( { label, className }: ItemsListContainerProps ) {
    return (
        <>
            <h2 className={`${classNameStyleItemsListContainer} ${className}`}>{label}</h2>
        </>
    )
}