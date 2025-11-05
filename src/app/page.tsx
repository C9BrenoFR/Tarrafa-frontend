'use client';

import { Suspense } from 'react';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import Home from '@/components/Paginas/Homepage/Home';
import { useCookie } from '@/hooks/useCookie';

export default function HomeLayout() {
  const [savedCourse, setCourse, deleteCourse, setCourseOnly, deleteCourseOnly] = useCookie('course', null)
  deleteCourseOnly()

  return (
    <Suspense fallback={<div>Carregando curso...</div>}>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header id={1} />
          <main>
            <Home />
          </main>
        </div>
      </div>
    </Suspense>
  );
}
