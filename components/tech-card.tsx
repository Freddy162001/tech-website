import Image from "next/image"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TechCardProps {
  title: string
  description: string
  image: string
}

export function TechCard({ title, description, image }: TechCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
            <Image src={image || "/placeholder.svg"} alt={title} width={40} height={40} />
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button variant="outline" className="w-full">
          Explore
        </Button>
      </CardFooter>
    </Card>
  )
}

