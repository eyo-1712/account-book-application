import { Receipt } from '../../receipt/ui'

export const ReceiptToday = () => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-4">
      <p>30일</p>
      <Receipt price={20000} reason="월급" src="https://picsum.photos/200" />
      <Receipt price={20000} reason="월급" src="https://picsum.photos/200" />
      <Receipt price={20000} reason="월급" src="https://picsum.photos/200" />
    </div>
  </div>
)
