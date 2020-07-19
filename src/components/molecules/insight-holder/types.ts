import { NotificationProps } from "../../../store/analytics/types"

export type InsightHolderProps = {
    insight: NotificationProps,
    onAck: (insightId?: any) => void
}

export type  InsightHolderState = {

}
