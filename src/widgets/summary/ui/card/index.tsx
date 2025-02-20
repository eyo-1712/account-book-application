import { format } from 'date-fns'
import { useRouter } from 'shared/lib'
import { SummaryProps } from './type'

export const Summary = ({ summary, withDate }: SummaryProps) => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      className="flex flex-row items-center gap-2"
      onClick={nav.summaryId({ id: summary.id })}
    >
      <div className="flex flex-col items-start flex-1">
        {withDate && (
          <p className="text-sm">
            {format(summary.datetime, 'yyyy. MM. dd HH:mm')}
          </p>
        )}
        <p className="text-sm text-gray-600">{summary.category.name}</p>
        <p
          className={[
            'font-bold text-lg',
            `${summary.type === 'income' ? 'income' : 'expenditure'}`,
          ].join(' ')}
        >
          {summary.type === 'income' ? '' : '-'}
          {summary.money.toLocaleString()} 원
        </p>
      </div>
    </button>
  )
}
