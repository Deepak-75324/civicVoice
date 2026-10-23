
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Camera,
  ClipboardCheck,
  Construction,
  Trash2,
  Lightbulb,
} from "lucide-react";

const issueTypes = [
  {
    title: "Road damage",
    description: "Report potholes and damaged roads.",
    icon: Construction,
  },
  {
    title: "Waste management",
    description: "Report garbage and sanitation issues.",
    icon: Trash2,
  },
  {
    title: "Streetlights",
    description: "Report broken or non-working lights.",
    icon: Lightbulb,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              <MapPin size={16} />
              Your voice. Your community.
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Make your community
              <span className="block text-emerald-600">
                a better place.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Report civic problems, share their location, and follow
              their progress. Help make public services more accountable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
              >
                Report an issue <ArrowRight size={18} />
              </Link>

              <a
                href="#how-it-works"
                className="rounded-xl border border-slate-300 px-6 py-3.5 font-semibold hover:bg-white"
              >
                How it works
              </a>
            </div>

            <p className="mt-5 pt-3 text-sm text-slate-500">
              Built to help communities report and track public issues.
            </p>
          </div>

          {/* Feature panel */}
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">CivicVoice</p>
                <h2 className="mt-1 text-2xl font-bold">Your report matters</h2>
              </div>
              <ClipboardCheck className="h-10 w-10 text-emerald-600" />
            </div>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <Camera className="mt-1 text-emerald-600" />
                <div>
                  <h3 className="font-semibold mr-40">Show the problem</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Add a description and photos to explain the issue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <MapPin className="mt-1 text-emerald-600" />
                <div>
                  <h3 className="font-semibold mr-25">Pin the location</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Help identify where action is needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <ClipboardCheck className="mt-1 text-emerald-600" />
                <div>
                  <h3 className="font-semibold mr-40">Follow progress</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Check updates as your complaint moves through its workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issue categories */}
      <section id="issues" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-semibold text-emerald-600">WHAT CAN YOU REPORT?</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Small reports can lead to meaningful change.
          </h2>
          <p className="mt-4 text-slate-600">
            Start by reporting a problem that affects your neighbourhood.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {issueTypes.map((issue) => {
            const Icon = issue.icon;

            return (
              <article
                key={issue.title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3">
                  <Icon className="h-7 w-7 text-emerald-600" />
                </div>

                <h3 className="mt-5 text-xl font-bold">{issue.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {issue.description}
                </p>

                <Link
                  to="/register"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-700"
                >
                  Get started <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold text-emerald-600">THREE SIMPLE STEPS</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From reporting to resolution
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Report", "Describe the issue and provide its location."],
              ["02", "Review", "The relevant team reviews and processes the report."],
              ["03", "Track", "Follow status updates and resolution progress."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-3xl font-extrabold text-emerald-600">
                  {number}
                </p>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-700 px-7 py-12 text-center text-white md:px-16 md:py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your community deserves to be heard.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-50">
            Join CivicVoice and help make public problems visible and
            easier to track.
          </p>
          <Link
            to="/register"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Create an account <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
