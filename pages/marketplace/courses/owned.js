import { useOwnedCourses } from "@components/hooks/web3"
import { Button, Message } from "@components/ui/common"
import { OwnedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { Marketheader } from "@components/ui/marketplace"

export default function OwnedCourses() {

  const {ownedCourses} = useOwnedCourses()

  return (
    <>
    {ownedCourses.data}
      <div className="py-4">
        <Marketheader />
      </div>
      <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <Message type="success">My custom Message!</Message>
          <Button>Watch the course</Button>
        </OwnedCourseCard>
      </section>
    </>
  )
}

OwnedCourses.Layout = BaseLayout
