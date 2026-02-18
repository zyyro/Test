import Image from "next/image";
import FilterButton from "@/components/ui/FilterButton";
import CourseCard from "@/components//ui/CourseCard";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className=" flex flex-col text-black gap-3 ml-10 mr-10  ">
        <div className=" text-black ">
          <h1 className=" text-5xl ">Computer Science</h1>
        </div>

        <div className="gap-3">
          {/* Top Row */}
          <div className="flex justify-between items-start mb-6">
            {/* Left Description */}
            <p className="text-gray-600 max-w-2xl">
              Explore computer science courses on Coursera to equip yourself
              with job-relevant skills for a variety of roles. Learn programming
              techniques and build technical skills with courses on software
              development, algorithm design, system architecture, and more.
            </p>

            {/* Right Stats */}
            <div className="flex items-center justify-center divide-x divide-gray-300">
              <div className="px-6 text-center">
                <p className="text-xl font-bold">373</p>
                <p className="text-sm text-gray-500">credentials</p>
              </div>
              <div className="px-6 text-center">
                <p className="text-xl font-bold">19</p>
                <p className="text-sm text-gray-500 whitespace-nowrap">
                  online degrees
                </p>
              </div>
              <div className="px-6 text-center">
                <p className="text-xl font-bold">2,347</p>
                <p className="text-sm text-gray-500">courses</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold pt-">
                Introduction to Computer Programming Using Python
              </h2>
            </div>
            <div className="flex gap-5 justify-end">
              <FilterButton label="All" />
              <FilterButton label="Beginner" />
              <FilterButton label="Intermediate" />
              <FilterButton label="Advanced" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={course.href ?? "/"} className="block">
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const courses = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    href: "/detail",
    university: "University of Pennsylvania",
    image: "/image/11.jpg",
    logo: "/image/pen.png",
    tag: false,
    buildDegree: true,
    type: "Course",
  },
  {
    id: 2,
    title: "Introduction to Open Source Application Development",
    university: "Illinois Tech",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    logo: "/image/tech.png",
    tag: true,
    buildDegree: true,
    type: "Specialization",
  },
  {
    id: 3,
    title: "Web Development with React",
    university: "Meta",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    logo: "/image/11.webp",
    tag: true,
    buildDegree: false,
    type: "Bootcamp",
  },
  {
    id: 4,
    title: "Data Science Fundamentals",
    university: "IBM",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    logo: "/image/ibm.png",
    tag: false,
    buildDegree: true,
    type: "Course",
  },
];
