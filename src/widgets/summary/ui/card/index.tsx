import { useRouter } from 'shared/lib'
import { IProps } from './type'

export const Summary = (props: IProps) => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      className="flex flex-row items-center gap-2"
      onClick={nav.summaryId('1')}
    >
      {/* <img
        src={props.src}
        alt={props.src}
        style={{
          width: '3rem',
          height: '3rem',
          objectFit: 'cover',
          aspectRatio: 1,
          borderRadius: '100%',
        }}
      /> */}

      <div className="flex flex-col items-start flex-1">
        <p className="text-gray-600 text-sm">{props.reason}</p>
        <p
          className={[
            'font-bold text-lg',
            `${props.price > 0 ? 'text-blue-600' : 'text-gray-600'}`,
          ].join(' ')}
        >
          {props.price.toLocaleString()} 원
        </p>
      </div>
    </button>
  )
}
