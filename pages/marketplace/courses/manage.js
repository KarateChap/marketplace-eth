import { OwnedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { Marketheader } from "@components/ui/marketplace"

export default function ManageCourses() {
  return (
    <>
      <div className="py-4">
        <Marketheader />
      </div>
      <section className="grid grid-cols-1">
        <OwnedCourseCard />
      </section>
    </>
  )
}

ManageCourses.Layout = BaseLayout
