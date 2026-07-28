export const API_BASE =
  "https://kta-learning-hub-api.onrender.com/api";

export const getToken = (): string |null => {
  try {
    return localStorage.getItem("kta_token");
  } catch {
    return null;
  }
};

/* ============================================================
   COMMON TYPES
============================================================ */

export interface ApiResponse<T> {
  success?: boolean;
  message?: string;
  data: T;
}

type ApiBody = object | FormData | string;

interface ApiRequestOptions
  extends Omit<RequestInit, "body" | "headers"> {
  body?: ApiBody;
  headers?: HeadersInit;
}

/* ============================================================
   AUTH TYPES
============================================================ */

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  name?: string;
  email: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterResponse {
  token: string;
  user: User;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatar?: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

/* ============================================================
   COURSE TYPES
============================================================ */

export interface Course {
  id: number;
  title: string;
  description?: string;
  duration?: string;
  price?: number;
  status?: string;
  isPublished?: boolean;

  totalModules?: number;
  totalLessons?: number;
}

/* ============================================================
   MODULE TYPES
============================================================ */

export interface CourseModule {
  id: number;

  title: string;

  order: number;

  lessons: Lesson[];
}

/* ============================================================
   LESSON TYPES
============================================================ */

export interface Lesson {
  id: number;

  title: string;

  description?: string;

  duration?: string;

  status?: string;
}
/* ============================================================
   DISCUSSION TYPES
============================================================ */

export interface DiscussionReply {
  id: number;
  parentCommentId?: number;

  lessonId?: number;
  lessonTitle?: string;

  content?: string;
  text?: string;

  userName?: string;
  studentName?: string;

  user?: User;

  createdAt?: string;

  isHidden?: boolean;
  isPinned?: boolean;
}

export interface DiscussionComment {
  id: number;

  lessonId?: number;
  lesson?: Lesson;

  lessonTitle?: string;

  content?: string;
  text?: string;

  userName?: string;
  studentName?: string;

  user?: User;

  createdAt?: string;

  isHidden?: boolean;
  isPinned?: boolean;

  replies?: DiscussionReply[];
}

/* ============================================================
   STUDENT TYPES
============================================================ */

export interface Enrollment {
  id: number;

  courseTitle?: string;

  status?: string;

  progressPercentage?: number;

  isPaid?: boolean;

  coursePrice?: number;

  enrolledAt?: string;
}

export interface Student {
  id: number;

  fullName: string;

  email: string;

  status: "Active" | "Inactive";

  coursesEnrolled?: number;

  enrolledCourses?: number;

  averageProgress?: number;

  progressPercentage?: number;

  assignmentsSubmitted?: number;

  reflectionsSubmitted?: number;

  lastLogin?: string;

  createdAt?: string;

  enrollments?: Enrollment[];
}
/* ============================================================
   DASHBOARD TYPES
============================================================ */

export interface DashboardStats {
  totalStudents: number;
  totalCourses: number;
  totalEnrollments: number;
  totalAssignmentsSubmitted: number;
  totalReflectionsSubmitted: number;
  averageLessonRating: number;
}

/* ============================================================
   API REQUEST
============================================================ */

async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const url = `${API_BASE}${endpoint}`;

  const isFormData = options.body instanceof FormData;

  const headers: HeadersInit = {
    ...(isFormData
      ? {}
      : { "Content-Type": "application/json" }),

    ...(getToken()
      ? {
          Authorization: `Bearer ${getToken()}`,
        }
      : {}),

    ...(options.headers ?? {}),
  };

  const { body, ...rest } = options;

  const config: RequestInit = {
    ...rest,
    headers,
  };

  if (body !== undefined && body !== null) {
    if (body instanceof FormData) {
      config.body = body;
    } else if (typeof body === "string") {
      config.body = body;
    } else {
      config.body = JSON.stringify(body);
    }
  }

  const response = await fetch(url, config);

  const json = (await response
    .json()
    .catch(() => null)) as ApiResponse<T> | T | null;

  if (!response.ok) {
    const error = json as
      | {
          message?: string;
          error?: string;
          errors?: unknown;
        }
      | null;

    throw new Error(
      error?.message ??
        error?.error ??
        (error?.errors
          ? JSON.stringify(error.errors)
          : `Request failed (${response.status})`)
    );
  }

  if (
    json &&
    typeof json === "object" &&
    "data" in json
  ) {
    return (json as ApiResponse<T>).data;
  }

  return json as T;
}
/* ============================================================
   AUTH
============================================================ */

export const auth = {
  register: (body: RegisterRequest) =>
    apiRequest<RegisterResponse>("/auth/register", {
      method: "POST",
      body,
    }),

  login: (body: LoginRequest) =>
    apiRequest<LoginResponse>("/auth/login", {
      method: "POST",
      body,
    }),

  getProfile: () =>
    apiRequest<User>("/auth/profile"),

  updateProfile: (body: UpdateProfileRequest) =>
    apiRequest<User>("/auth/profile", {
      method: "PUT",
      body,
    }),

  changePassword: (body: ChangePasswordRequest) =>
    apiRequest<{ message: string }>(
      "/auth/change-password",
      {
        method: "POST",
        body,
      }
    ),
};

/* ============================================================
   COURSES
============================================================ */

export const courses = {
  getAll: () =>
    apiRequest<Course[]>("/courses/published"),

  getAllAdmin: (params = "") =>
    apiRequest<Course[]>(`/courses${params}`),

  getById: (id: string | number) =>
    apiRequest<Course>(`/courses/${id}`),

  create: (body: Record<string, unknown>) =>
    apiRequest<Course>("/courses", {
      method: "POST",
      body,
    }),

  update: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<Course>(`/courses/${id}`, {
      method: "PUT",
      body,
    }),

  delete: (id: string | number) =>
    apiRequest<{ message: string }>(
      `/courses/${id}`,
      {
        method: "DELETE",
      }
    ),
};

/* ============================================================
   MODULES
============================================================ */

export const modules = {
  getByCourse: (
    courseId: string | number
  ) =>
    apiRequest<CourseModule[]>(
      `/modules/course/${courseId}`
    ),

  create: (body: Record<string, unknown>) =>
    apiRequest<CourseModule>("/modules", {
      method: "POST",
      body,
    }),

  update: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<CourseModule>(
      `/modules/${id}`,
      {
        method: "PUT",
        body,
      }
    ),

  delete: (id: string | number) =>
    apiRequest<{ message: string }>(
      `/modules/${id}`,
      {
        method: "DELETE",
      }
    ),

  reorder: (body: Record<string, unknown>) =>
    apiRequest<{ message: string }>(
      "/modules/reorder",
      {
        method: "PUT",
        body,
      }
    ),
};
/* ============================================================
   ENROLLMENTS
============================================================ */

export const enrollments = {
  getMyCourses: () =>
    apiRequest<Enrollment[]>("/enrollments/my-courses"),

  check: (courseId: string | number) =>
    apiRequest<Enrollment>(
      `/enrollments/course/${courseId}`
    ),

  enroll: (body: Record<string, unknown>) =>
    apiRequest<Enrollment>("/enrollments", {
      method: "POST",
      body,
    }),

  pay: (body: Record<string, unknown>) =>
    apiRequest<{ message: string }>(
      "/enrollments/payment",
      {
        method: "POST",
        body,
      }
    ),
};

/* ============================================================
   LESSONS
============================================================ */

export const lessons = {
  getById: (id: string | number) =>
    apiRequest<Lesson>(`/lessons/${id}`),

  getByModule: (moduleId: string | number) =>
    apiRequest<Lesson[]>(
      `/lessons/module/${moduleId}`
    ),

  getStudentLesson: (id: string | number) =>
    apiRequest<Lesson>(
      `/lessons/${id}/student`
    ),

  create: (body: Record<string, unknown>) =>
    apiRequest<Lesson>("/lessons", {
      method: "POST",
      body,
    }),

  updateContent: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<Lesson>(
      `/lessons/${id}/content`,
      {
        method: "PUT",
        body,
      }
    ),

  delete: (id: string | number) =>
    apiRequest<{ message: string }>(
      `/lessons/${id}`,
      {
        method: "DELETE",
      }
    ),

  updateAssignment: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<Lesson>(
      `/lessons/${id}/assignment`,
      {
        method: "PUT",
        body,
      }
    ),

  updateReflection: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<Lesson>(
      `/lessons/${id}/reflection`,
      {
        method: "PUT",
        body,
      }
    ),

  updateCommunity: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<Lesson>(
      `/lessons/${id}/community`,
      {
        method: "PUT",
        body,
      }
    ),

  updateRatingSettings: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<Lesson>(
      `/lessons/${id}/rating-settings`,
      {
        method: "PUT",
        body,
      }
    ),

  publish: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<Lesson>(
      `/lessons/${id}/publish`,
      {
        method: "PUT",
        body,
      }
    ),
};
/* ============================================================
   LEARNING
============================================================ */

export const learning = {
  // Progress
  getProgress: (lessonId: string | number) =>
    apiRequest<{ completed: boolean; progress: number }>(
      `/learning/progress/${lessonId}`
    ),

  complete: (
    lessonId: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<{ message: string }>(
      `/learning/progress/${lessonId}/complete`,
      {
        method: "POST",
        body,
      }
    ),

  // Assignments
  submitAssignment: (
    body: Record<string, unknown>
  ) =>
    apiRequest<{ message: string }>(
      "/learning/assignments/submit",
      {
        method: "POST",
        body,
      }
    ),

  getAllAssignments: (params = "") =>
    apiRequest<Record<string, unknown>[]>(
      `/learning/assignments${params}`
    ),

  reviewAssignment: (
    submissionId: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<{ message: string }>(
      `/learning/assignments/${submissionId}/review`,
      {
        method: "PUT",
        body,
      }
    ),

  // Reflections
  submitReflection: (
    body: Record<string, unknown>
  ) =>
    apiRequest<{ message: string }>(
      "/learning/reflections/submit",
      {
        method: "POST",
        body,
      }
    ),

  getAllReflections: (params = "") =>
    apiRequest<Record<string, unknown>[]>(
      `/learning/reflections${params}`
    ),

  reviewReflection: (
    submissionId: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<{ message: string }>(
      `/learning/reflections/${submissionId}/review`,
      {
        method: "PUT",
        body,
      }
    ),

  // Ratings
  submitRating: (
    body: Record<string, unknown>
  ) =>
    apiRequest<{ message: string }>(
      "/learning/ratings/submit",
      {
        method: "POST",
        body,
      }
    ),
};
/* ============================================================
   DISCUSSION TYPES
============================================================ */

export interface DiscussionReply {
  id: number;
  lessonId?: number;
  parentCommentId?: number;

  content?: string;
  text?: string;

  userName?: string;
  studentName?: string;

  user?: User;
lesson?: Lesson;
  
  lessonTitle?: string;

  createdAt?: string;

  isPinned?: boolean;
  isHidden?: boolean;
}

export interface DiscussionComment {
  id: number;

  lessonId?: number;

  content?: string;
  text?: string;

  userName?: string;
  studentName?: string;
user?: User;
lesson?: Lesson;

  lessonTitle?: string;

  createdAt?: string;

  isPinned?: boolean;
  isHidden?: boolean;

  replies?: DiscussionReply[];
}
/* ============================================================
   DISCUSSIONS
============================================================ */
export const discussions = {
  getByLesson: (lessonId: string | number) =>
    apiRequest<DiscussionComment[]>(
      `/discussions/lesson/${lessonId}`
    ),

  getAll: (params = "") =>
    apiRequest<DiscussionComment[]>(
      `/discussions${params}`
    ),

  postComment: (
    body: Record<string, unknown>
  ) =>
    apiRequest<DiscussionComment>(
      "/discussions",
      {
        method: "POST",
        body,
      }
    ),

  deleteComment: (
    commentId: string | number
  ) =>
    apiRequest<{ message: string }>(
      `/discussions/${commentId}`,
      {
        method: "DELETE",
      }
    ),

  likeComment: (
    commentId: string | number
  ) =>
    apiRequest<{ message: string }>(
      `/discussions/${commentId}/like`,
      {
        method: "POST",
      }
    ),

  toggleHide: (
    commentId: string | number
  ) =>
    apiRequest<{ message: string }>(
      `/discussions/${commentId}/toggle-hide`,
      {
        method: "PUT",
      }
    ),

  togglePin: (
    commentId: string | number
  ) =>
    apiRequest<{ message: string }>(
      `/discussions/${commentId}/toggle-pin`,
      {
        method: "PUT",
      }
    ),
};
/* ============================================================
   FILES
============================================================ */

export const files = {
  uploadVideo: (formData: FormData) =>
    apiRequest<{ url: string }>(
      "/files/upload/video",
      {
        method: "POST",
        body: formData,
      }
    ),

  uploadAudio: (formData: FormData) =>
    apiRequest<{ url: string }>(
      "/files/upload/audio",
      {
        method: "POST",
        body: formData,
      }
    ),

  uploadDocument: (formData: FormData) =>
    apiRequest<{ url: string }>(
      "/files/upload/document",
      {
        method: "POST",
        body: formData,
      }
    ),

  uploadImage: (formData: FormData) =>
    apiRequest<{ url: string }>(
      "/files/upload/image",
      {
        method: "POST",
        body: formData,
      }
    ),
};
/* ============================================================
   ADMIN
============================================================ */
export interface DashboardStats {
  totalStudents: number;
  totalCourses: number;
  totalEnrollments: number;
  totalAssignmentsSubmitted: number;
  totalReflectionsSubmitted: number;
  averageLessonRating: number;
}

export const admin = {
  getDashboard: () =>
    apiRequest<DashboardStats>("/admin/dashboard"),

  getStudents: (params: string = "") =>
    apiRequest<Student[]>(`/admin/students${params}`),

  getStudent: (id: string | number) =>
    apiRequest<Student>(`/admin/students/${id}`),

  updateStudentStatus: (
    id: string | number,
    body: Record<string, unknown>
  ) =>
    apiRequest<Student>(
      `/admin/students/${id}/status`,
      {
        method: "PUT",
        body,
      }
    ),

  getCourseAnalytics: (
    courseId: string | number
  ) =>
    apiRequest<Record<string, unknown>>(
      `/admin/analytics/course/${courseId}`
    ),

  getPlatformAnalytics: () =>
    apiRequest<Record<string, unknown>>(
      "/admin/analytics/platform"
    ),
};

/* ============================================================
   EXPORT
============================================================ */

export default apiRequest;