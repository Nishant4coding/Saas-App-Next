import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const isProtectedRoute = createRouteMatcher(["/chatbot"]);
const publicRoutes = createRouteMatcher(["/", "/auth(.*)"]);

export default clerkMiddleware(async (authPromise, req) => {
  const auth = await authPromise; // Await the resolved auth object
  if (isProtectedRoute(req)) {
    auth.protect(); // Now you can call protect()
  }
  if (publicRoutes(req)) {
    return; // No protection needed for public routes
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
