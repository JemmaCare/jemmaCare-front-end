



import { Calendar, MailIcon, PhoneCall } from "lucide-react";
import nhyira from "../../images/nhyira.webp";
import { Link } from "react-router-dom";
const Nhyira = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">

            <div className="flex flex-col items-center">
                <img
                    src={nhyira}
                    alt="Esther"
                    className="rounded-full w-32 h-32 object-cover"
                />
                <div className="flex mt-4 space-x-4">
                    <Link to="mailto:esther@example.com" aria-label="Email Esther">
                        <MailIcon className="w-6 h-6 text-gray-600 hover:text-[#10CC9F]" />
                    </Link>


                    <Link to="tel:+233547978203" aria-label="Call Esther">
                        <PhoneCall className="w-6 h-6 text-gray-600 hover:text-[#10CC9F]" />
                    </Link>
                    <Link to="https://calendar.google.com/calendar/embed?src=ruth.agbozo.93%40gmail.com&ctz=Africa%2FAbidjan" aria-label="Schedule with Esther">
                        <Calendar className="w-6 h-6 text-gray-600 hover:text-[#10CC9F]" />
                    </Link>
                </div>
            </div>


            <div className="text-center mt-8 w-full md:w-4/5">
                <h1 className="text-2xl font-bold mb-4">Clinical Psychologist</h1>
                <p className="text-lg leading-relaxed mb-4">
                    Esther, a dedicated medical officer, has spent the last five years
                    immersed in the field of mental health. Her journey began with a
                    strong desire to address the stigma surrounding mental health issues
                    in her community. Through her work in various healthcare settings,
                    Esther has developed a deep understanding of the challenges faced by
                    individuals struggling with mental health conditions.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Her commitment to mental health advocacy is evident in the numerous
                    debates and discussions she has led on the subject. Esther has been a
                    vocal participant in conferences and forums, where she has
                    consistently championed the need for greater awareness and better
                    access to mental health services. Her arguments are grounded in her
                    firsthand experience with patients, giving her a unique perspective
                    that resonates with both professionals and the public.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Over the years, Esther has also been involved in several fellowships
                    focused on mental health. These programs have allowed her to
                    collaborate with experts from around the world, expanding her
                    knowledge and refining her approach to mental health care. Her
                    fellowship experiences have further solidified her belief in the
                    importance of a holistic, patient-centered approach to treatment.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Esther’s dedication extends beyond her professional life. She is
                    actively involved in community outreach programs, where she educates
                    people about mental health and provides support to those in need. Her
                    efforts have had a profound impact, helping to reduce the stigma
                    associated with mental illness and encouraging more people to seek
                    help.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Now, as she begins using our mental health app, Esther brings her
                    wealth of experience and passion for mental health to the platform.
                    Her insights and feedback will be invaluable in ensuring that the app
                    meets the needs of both healthcare professionals and patients alike.
                </p>
            </div>
        </div>
    );
};

export default Nhyira;
