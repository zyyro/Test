// import { FaComputer } from "react-icons/fa6";
import { link } from "fs";
import Link from "next/link";

{
  /* <Link href={`/courses/${courses.slug}`}>
  <div className="group bg-white border rounede-2xl">CourseCard</div>
</Link>; */
}
export default function CourseCard({ course }: { course: any }) {
  return (
    <div
      className="group bg-white border rounded-2xl overflow-hidden
      transition-all duration-300 ease-in-out
      hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      {/* IMAGE */}
      <div className="relative h-44 p-1 overflow-hidden rounded-xl">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover rounded-xl
          transition-transform duration-300 hover:scale-105"
        />

        <div className="absolute top-3 right-3">
          <div
            className="grid place-items-center bg-white text-xs font-medium
              px-3 py-0.5 rounded-full border border-gray-500 shadow
              transition-all duration-300"
          >
            {course.tag ? "Free" : "Previews"}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col h-42">
        {/* University */}
        <div className="flex items-center gap-2 ">
          <div className="border border-gray-500 rounded px-0.5 py-0.5">
            <img
              className="w-5 h-5 object-contain rounded-xs"
              src={course.logo}
              alt="logo"
            />
          </div>

          <p className="text-xs text-gray-500">{course.university}</p>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold mt-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Build Degree */}
        {course.buildDegree && (
          <div className="mt-auto">
            <div className="flex items-center gap-2  text-blue-600 text-xs font-medium ">
              {/* <FaComputer size={20} /> */}
              <span className="hover:underline">Build toward a degree</span>
              {/* Footer */}
            </div>
            <p className="text-xs text-gray-400 mt-1">{course.type}</p>
          </div>
        )}
      </div>
    </div>
  );
}
