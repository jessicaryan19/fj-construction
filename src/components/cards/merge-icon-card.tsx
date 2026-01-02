import { Icon } from "@iconify/react"
import { Card, CardContent } from "../ui/card"

interface MergeIconCardProps {
  icon: string
  title: string
  description: string
}

export default function MergeIconCard({
  icon,
  title,
  description,
}: MergeIconCardProps) {
  return (
    <Card className="relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-3xl bg-primary">
      <CardContent className="absolute bottom-0 flex w-full flex-col items-center p-0">
        <Icon
          icon={icon}
          className="translate-y-3 text-6xl text-white"
        />

        <div className="flex w-full flex-col py-6 items-center gap-4 rounded-t-3xl bg-white text-center text-primary">
          <h6 className="line-clamp-2 min-h-[2.5em] leading-snug px-2">
            {title}
          </h6>
          <p className="line-clamp-3 min-h-[4.5em] px-4 sm:px-6 lg:px-10 leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
