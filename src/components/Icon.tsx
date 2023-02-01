import { OverlayTrigger, Tooltip } from 'react-bootstrap'

interface icon {
  tooltipText?: string,
  icon: string,
  color: string
}

export function Icon (props: icon) {
  let className = props.icon
  className += ' ' + props.color
  return (
    (props.tooltipText === undefined)
      ? (
        <i className={className} />
        )
      : (
        <OverlayTrigger overlay={<Tooltip>{props.tooltipText}</Tooltip>}>
          <i className={className} />
        </OverlayTrigger>
        )

  )
}
