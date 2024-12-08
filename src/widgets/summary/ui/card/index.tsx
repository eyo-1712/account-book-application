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
        {props.price > 0 ? (
          <p className="font-bold text-blue-600">
            {props.price.toLocaleString()} 원
          </p>
        ) : (
          <p className="font-bold text-gray-600">
            {props.price.toLocaleString()} 원
          </p>
        )}
        <p className="text-gray-600">{props.reason}</p>
      </div>
    </button>
  )
}
