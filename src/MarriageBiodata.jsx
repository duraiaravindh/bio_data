import React from "react";
import profileImg from "./assets/durai-profile.jpeg";
import pic1 from "./assets/photo1.jpeg";
import pic2 from "./assets/photo2.jpeg";
import pic3 from "./assets/photo3.jpeg";
import pic4 from "./assets/photo4.jpeg";

export default function MarriageBiodata() {
  const data = {
    photo: profileImg,
    gallery: [pic1, pic2, pic3, pic4],
    name: "Durai Aravindhraj Elangovan",
    dob: "11-Nov-1996",
    age: "28",
    height: "165 cm",
    weight: "76 kg",
    maritalStatus: "Single / Unmarried",
    birthPlace: "Tenkasi, Tamil Nadu",
    residence: "Chennai",
    religionCaste: "Hindu / Nadar",
    motherTongue: "Tamil",
    nationality: "Indian",
    qualification: "BE Civil",
    occupation: "Senior GIS Engineer",
    company: "Austin NNN",
    income: "₹48,000 - ₹55,000",
    location: "Chennai, Tamil Nadu",
    father: "Elangovan Durairaj (passed away)",
    mother: "Saratha Elangovan (passed away)",
    siblings: "Raveena Elangovan — Visual Merchandiser",
    phone: "+91 7401518903",
    email: "duraielango11@gmail.com",
    address: "Chennai, Tamil Nadu",
    zodiac: "Scorpio (Vrischika) ♏",
    star: "Vishakam",
    lagna: "Kadakam (Cancer) ♋",

    about: `<b>Hi, I am Durai, 29</b> – an IT guy who somehow makes technology look cool. I lost my parents early, but that only made me stronger, closer to my sister, and more focused on living life fully. I balance responsibilities with fun—whether it is exploring food spots, bingeing anime, gaming, or just laughing at life’s little dramas.

<b>Lifestyle</b> – No smoking, no drinking—my only addictions are learning new things and discovering new places. I love being around people, sharing stories, and turning even boring moments into entertainment.

<b>Career</b> – I work in IT, always upgrading my skills and chasing growth. For me, stability does not mean settling down, it means learning more, earning more, and staying curious forever.

<b>What I am Looking For</b> – I am searching for a partner who is independent, cheerful, and ready to live life as a team. I do not expect her to earn for me, but I would love her to grow in her own career and dreams. Her family will be mine too—I would stand by them just like I would stand by her.

<b>Values</b> – Caste, religion, community do not matter to me—we are all humans at the end of the day. What matters is laughter, loyalty, trust, and building a life together with patience and positivity.`
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-white p-8 flex items-center justify-center">
      <div className="relative max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden z-10">
        <div className="md:flex">
          {/* Left column */}
          <div className="md:w-1/3 bg-gradient-to-b from-orange-100 via-orange-50 to-white p-8 flex flex-col items-center">
            {/* Profile photo */}
            <div className="w-44 h-44 rounded-full border-4 border-orange-400 shadow-lg overflow-hidden">
              <img
                src={data.photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.about }} />
            <h1 className="mt-4 text-2xl font-extrabold text-gray-800 text-center">
              {data.name}
            </h1>
            <p className="text-sm text-orange-600">(Confidential & Genuine)</p>

            {/* Quick stats */}
            <div className="mt-5 w-full grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div className="bg-white/60 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-500">Age</div>
                <div className="font-semibold">{data.age} yrs</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-500">Height</div>
                <div className="font-semibold">{data.height}</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-500">Weight</div>
                <div className="font-semibold">{data.weight}</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-500">Status</div>
                <div className="font-semibold">{data.maritalStatus}</div>
              </div>
            </div>

            {/* About Me */}
            <div className="mt-6 w-full p-4 bg-amber-50 rounded text-sm text-gray-700">
              <div className="font-medium text-gray-800 mb-1">About Me</div>
              <div className="whitespace-pre-line">{data.about}</div>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-2/3 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Marriage Biodata
              </h2>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
                <div>
                  <div className="text-xs text-gray-500">Date of Birth</div>
                  <div className="font-medium">{data.dob}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Religion / Caste</div>
                  <div className="font-medium">{data.religionCaste}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Birth Place</div>
                  <div className="font-medium">{data.birthPlace}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Residence</div>
                  <div className="font-medium">{data.residence}</div>
                </div>

                {/* Astrology */}
                <div>
                  <div className="text-xs text-gray-500">Zodiac (Rasi)</div>
                  <div className="font-medium">{data.zodiac}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Star (Nakshatra)</div>
                  <div className="font-medium">{data.star}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Lagna</div>
                  <div className="font-medium">{data.lagna}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-500">Qualification</div>
                  <div className="font-medium">{data.qualification}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Occupation</div>
                  <div className="font-medium">
                    {data.occupation} — {data.company}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Annual Income</div>
                  <div className="font-medium">{data.income}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="font-medium">{data.location}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Father</div>
                  <div className="font-medium">{data.father}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Mother</div>
                  <div className="font-medium">{data.mother}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs text-gray-500">Siblings</div>
                  <div className="font-medium">{data.siblings}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="font-medium">{data.phone}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-medium">{data.email}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs text-gray-500">Address</div>
                  <div className="font-medium">{data.address}</div>
                </div>
              </div>
            </div>

            {/* Photo Gallery at bottom */}
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-gray-700 border-l-4 border-green-400 pl-3 mb-3">
                Photo Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="w-full aspect-square overflow-hidden rounded-lg border-2 border-orange-300 shadow-md"
                  >
                    <img
                      src={src}
                      alt={`gallery-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
