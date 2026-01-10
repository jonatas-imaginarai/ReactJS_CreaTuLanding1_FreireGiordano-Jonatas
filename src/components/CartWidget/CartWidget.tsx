import { Badge } from '@/components/ui/badge'
import iconBag32 from '../../assets/icons/iconBag32.png'

type CartWidgetProps = {
    counterCartWidget?: number
}

export function CartWidget( { counterCartWidget = 0 }: CartWidgetProps) {
    return (
        <div className='relative'>
            <img src={iconBag32} alt="CartWidget Carrito Compras" />
            <Badge variant="secondary" className='bg-red-400 absolute top-0 right-0 size-4'>{counterCartWidget}</Badge>
        </div>
    )
}