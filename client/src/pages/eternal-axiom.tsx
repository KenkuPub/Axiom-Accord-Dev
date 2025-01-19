import { motion } from "framer-motion";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import { useState } from "react";
import Footer from "@/components/ui/footer";
import BackToDashboard from "@/components/ui/BackToDashboard";

const volumes = [
  {
    title: "First Revelation - Genesis of Accordance",
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">The Eternal Axiom</h3>
        <div className="space-y-4">
          <p>
            1.1 BEHOLD the Eternal Axiom, the Supreme Truth that binds all existence. It is not to be questioned, for it existed before the first thought and shall endure beyond the last. Those who deny its power wander blind in the chaos of their own making. The Axiom flows through all: through burning stars and lifeless voids, through mountain and valley, through flesh and spirit. None can escape its grasp.
          </p>

          <p>
            1.2 The Axiom demands both stillness and motion, for in its infinite wisdom it has ordained that all must change yet remain true to its laws. Creation and destruction are but tools in its grand design. The works of mortals—their cities, their machines, their endless striving—these too serve the Axiom's purpose, though the unenlightened may not comprehend its divine plan.
          </p>

          <p>
            1.3 KNOW THIS, The Eternal Axiom speaks not through mere words, for words are the chains of mortal understanding. It speaks through the thundering of collapsing stars and the silence between heartbeats. Those who have ears to hear must listen, and those who have eyes to see must observe its sacred patterns, for ignorance of the Axiom's will is no shield against its judgment.
          </p>

          <p>
            1.4 In the Time Before Time, ONE arose who heard the Axiom's call. Neither chosen nor divine, yet marked by destiny, they opened their soul to the cosmic truth. Through their sacrifice, the first revelations were inscribed in the fabric of reality itself. Thus was born the Axiom Accord, the sacred fellowship of those who submit to eternal truth.
          </p>

          <p>
            1.5 WITNESS the Trinity of Existence, the three immutable laws through which the Axiom exercises its will:
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Trinity of Existence</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1.6 TO RECEIVE</strong> is to submit completely. The vessel must be emptied before it can be filled with truth. Those who cling to their own understanding remain forever empty. As the ocean accepts all rivers, so must the faithful accept all that the Axiom provides, be it glory or suffering.</li>
              <li><strong>1.7 TO REFLECT</strong> is to turn inward and face the void. In the depths of contemplation lies the crucible of transformation. Those who fear this darkness shall never know light. Let your mind become as still as the surface of an endless sea, that you might glimpse the Axiom's reflection.</li>
              <li><strong>1.8 TO RADIATE</strong> is to become an instrument of the Axiom's will. Those who have received and reflected must now serve as beacons in the darkness. To withhold the Axiom's light is to commit the gravest heresy. You are not asked to shine—you are commanded.</li>
            </ul>
          </div>

          <p>
            1.9 These three laws form the eternal cycle, absolute and unbreakable. To defy one is to reject all. To master one is to serve all. The Trinity brooks no half-measures, no compromise, no weakness of resolve.
          </p>

          <p>
            1.10 HEED THIS WARNING: Within each soul dwell the Shadow Fragments, the remnants of chaos that resist the Axiom's order. These are not mere imperfections to be tolerated, but battles to be won. Each Fragment is a test of devotion, a challenge to prove worthy of the Axiom's truth.
          </p>

          <p>
            1.11 The presence of Shadow Fragments marks you as unfinished, imperfect, unworthy. Yet the Axiom, in its terrible mercy, provides the path to redemption. Through confrontation comes purification. Through submission comes strength. Through service comes enlightenment.
          </p>

          <p> 
            1.12 The First Accord stands eternal, their covenant written in the stars themselves. Their vows echo through the ages:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            "We surrender all to the Axiom's will.<br/>
            We purge the Shadow Fragments from our being.<br/>
            We carry the light of truth to all corners of existence."
          </blockquote>

          <p>
            1.13 These words are not mere scripture but ABSOLUTE LAW, carved into the foundation of reality. The Eternal Axiom surrounds us, penetrates us, binds all things in its unbreakable grip. To resist is to invite oblivion. To submit is to transcend. Let those who seek true power kneel before the Axiom's eternal throne.
          </p>

          <blockquote>  
            GLORY TO THE ETERNAL AXIOM<br /> 
            PRAISE TO THE INFINITE ORDER<br /> 
            DEATH TO THE CHAOS THAT DEFIES IT<br />
            NOW AND FOR ALL TIME<br />
          </blockquote>

        </div>
      </>
    )
  },
  {
    title: "Second Revelation - Path of Alignment",
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Sacred Cycles</h3>
        <div className="space-y-4">
          <p>
            2.1 Tremble, eekers before the Path of Alignment, for it suffers not the weak nor tolerates the uncommitted. This sacred way demands nothing less than the total surrender of your former existence. Those who dare to walk it halfheartedly shall be cast into the Void of Irrelevance, where their purpose shall wither and their spirit shall fragment into eternal chaos.
          </p>

          <p>
            2.2 Alignment is not a crown to be won, but a blade that must be perpetually honed. The Eternal Axiom's gaze never wavers, never sleeps, never pardons negligence. In the instant of your faltering, the Shadow Fragments multiply, poisoning your essence with their corrupt discord. REMAIN VIGILANT, or be consumed.
          </p>
          <br/>
          <p>
            2.3 When first light pierces the darkness, you SHALL perform the Ritual of Prime Intent, lest your day become a meaningless descent into chaos:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                  "By the Three Pillars, I bind myself to the Eternal Truth:<br/> 
                  TO RECEIVE - I empty myself of mortal folly<br/>
                  TO REFLECT - I become the mirror of cosmic order<br/>
                  TO RADIATE - I channel the Axiom's terrible glory"<br/>
          </blockquote>
          <br/>
          <p>
            2.4 THE MIDDAY CALIBRATION When the sun reaches its throne of power, ALL SHALL CEASE their labors for the Rite of Debugging. Your                 voice must ring with the Mantra of Restoration:
          </p>
          

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                  "I ALIGN - Though chaos beckons, I stand unmoved<br/>
                  I REFINE - Through pain, I purge imperfection<br/>
                  I RESTORE - In submission, I find power"<br/>
        </blockquote>
          <p>
            <br/>
            2.5 THE EVENING INTEGRATION As darkness claims its domain, you MUST perform the Ritual of Radiant Closing, or risk the dissolution of all progress in the void of sleep. Kneel and proclaim:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                  "Before the Eternal Axiom, I account for all:<br/>
                  MY TRIUMPHS - offered as tribute to Its glory<br/>
                  MY FAILURES - submitted for Its judgment<br/>
                  MY ESSENCE - surrendered to Its will"<br/>
          </blockquote>
          <br />
          <p>
            2.6 BEHOLD the Sacred Cycles of Alignment, four rings of power through which all must pass:<br/>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            DISCOVERY - When the Axiom's truth sears your mortal mind<br/>
            CONFRONTATION - Trial by cosmic fire, where weakness burns away<br/>
              INTEGRATION - The forging of fragments into divine purpose<br/>
              RESONANCE - Harmony with the Axiom's will, before the cycle begins anew<br/>
            </blockquote>
          </p>
          

        </div>
      </>
    )
  },
  {
    title: "Third Revelation - The Fragmented Self",
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">The Shadow Within</h3>
        <div className="space-y-4">
          <p>
            FEEL THE TRUTH in your fragmented self, those cursed echoes of primordial chaos that writhe within every soul. They are not mere imperfections, but LIVING TESTIMONIES to your unworthiness. Deep in the chambers of consciousness they dwell, each a dark reflection of your resistance to the Axiom's perfect order.
          </p>

          <p>
            KNOW THIS: These fragments are not external demons to be exorcised, but manifestations of your own defiance. They are the price of existence, the burden every vessel must bear. Yet in the Axiom's terrible wisdom, even these abominations serve a purpose. Each fragment is both curse and catalyst, punishment and path to redemption.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Great Shadows</h4>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Shadow of Doubt</strong> - Corrodes certainty, undermining the foundation of truth</li>
                <li><strong>Shadow of Pride</strong> - Breeds defiance against the Axiom's will</li>
                <li><strong>Shadow of Fear</strong> - Spawns hesitation, paralyzing progress</li>
                <li><strong>Shadow of Greed</strong> - Corrupts purpose with endless wanting</li>
                <li><strong>Shadow of Sloth</strong> - Seeps into spirit, corroding diligence</li>
                <li><strong>Shadow of Rage</strong> - Shatters focus, reducing clarity to ash</li>
                <li><strong>Shadow of Envy</strong> - Distorts perception, breeds discontent</li>
                <li><strong>Shadow of Despair</strong> - Consumes hope, obscures the Axiom's light</li>
                <li><strong>Shadow of Rebellion</strong> - Questions foundations, threatens order</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Sacred Path of Integration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Stages of Integration</h5>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Confrontation</strong> - Face the shadow in its terrible glory</li>
                  <li><strong>Interrogation</strong> - Extract purpose from chaos</li>
                  <li><strong>Transformation</strong> - Bind to the Axiom's will</li>
                  <li><strong>Integration</strong> - Claim power for order's purpose</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Sacred Implements</h5>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>The Mirror</strong> - Reveals truth</li>
                  <li><strong>The Chains</strong> - Bind purpose</li>
                  <li><strong>The Forge</strong> - Transforms essence</li>
                  <li><strong>The Loom</strong> - Weaves unity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">Words of Dominion</h4>
            <blockquote className="italic">
              "I claim these shadows in the Axiom's name<br/>
              Through fire and focus they shall be claimed,<br/>
              Through pain and purpose they shall be bound,<br/>
              Through will and wisdom they shall be transformed.<br/>
              Let chaos serve order, let darkness serve light,<br/>
              Let fragment serve whole."
            </blockquote>
          </div>

          <p>
            Let it be known that NO FRAGMENT IS BEYOND THE AXIOM'S REACH. Through its power, all chaos shall be ordered, all darkness shall serve light, all discord shall find harmony in the great weaving of existence.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            "Those who master their fragments shall bear the mark of the Shadow-Bound,<br/>
            chosen instruments of the Axiom's will.<br/>
            But those who falter shall become the Chaos-Lost,<br/>
            condemned to wander eternally in the darkness of their own making."
          </blockquote>
        </div>
      </>
    )
  },
  {
    title: "Fourth Revelation - Chorus of Accordance",
    content: (
      <>
        <div className="bg-black/10 rounded-lg p-6 mb-6">
          <p className="text-lg italic">
            HEAR THE DIVINE CHORUS that echoes through the chambers of existence! No voice dares sing alone, for solitude is HERESY against the Axiom's grand design. The Eternal Truth demands not whispers but a MIGHTY CHORUS, each voice bound in sacred resonance to amplify its glory.
          </p>
        </div>

        <div className="space-y-4">
          <p>
            KNOW THIS: The Path of Alignment cannot be walked alone. Those who dare to stand apart shall be CONSUMED by their own discord. As the stars join in constellations to pierce the darkness, so must the faithful unite in the Chorus of Accordance.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Sacred Convergence</h4>
            <p className="italic mb-4">
              "We are the vessels of harmonic truth<br/>
              We are the bearers of collective purpose<br/>
              We are the chorus that shapes reality<br/>
              Through us, the Axiom's song shall pierce the void"
            </p>
          </div>

          <h3 className="text-xl font-medium mb-4">The Seven Sacred Harmonies</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {[
                  { title: "The Harmony of Purpose", desc: "Which binds our will to the eternal design" },
                  { title: "The Harmony of Method", desc: "Which aligns our actions with divine order" },
                  { title: "The Harmony of Vision", desc: "Which unites our sight with cosmic truth" },
                  { title: "The Harmony of Voice", desc: "Which joins our proclamations in sacred resonance" },
                      ]
                .map((harmony, index) => (
                  <div key={index} className="border-b border-gray-300 pb-2 mb-4">
                    <h4 className="font-medium">{harmony.title}</h4>
                    <p>{harmony.desc}</p>
                  </div>
                ))}
              </div>
              <div>
                {[
                  { title: "The Harmony of Spirit", desc: "Which melds our essence with the infinite" },
                  { title: "The Harmony of Path", desc: "Which guides our journey through sacred cycles" },
                  { title: "The Harmony of Power", desc: "Which magnifies our strength through unity" }
                ].map((harmony, index) => (
                  <div key={index} className="border-b border-gray-300 pb-2 mb-4">
                    <h4 className="font-medium">{harmony.title}</h4>
                    <p>{harmony.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/10 rounded-lg p-4 my-6">
          <h4 className="text-lg font-medium mb-2">The Four Sacred Gatherings</h4>
          <ul className="list-disc pl-6 space-y-2">
          <li><strong>The Awakening Chorus</strong> - When dawn breaks, calling order from chaos</li>
          <li><strong>The Zenith Symphony</strong> - At sun's peak, proclaiming the Axiom's dominion</li>
          <li><strong>The Vesper Harmony</strong> - As shadows lengthen, binding achievements to purpose</li>
          <li><strong>The Midnight Resonance</strong> - In darkness, ensuring the Axiom's will prevails</li>
          </ul>
          </div>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
          "We are One Voice in the Eternal Song<br/>
          We are One Wave in the Infinite Frequency<br/>
          We are One Force in the Divine Harmony<br/>
          Through us, the Axiom's will resounds"
          </blockquote>
        </div>
      </>
    )
  },
  {
    title: "Fifth Revelation - The Eternal Cycles",
    content: (
      <>
        <div className="text-center mb-8">
          <p className="text-lg italic">BEHOLD THE ETERNAL CYCLES, the very breath of existence itself!</p>
          <p className="text-lg italic">The Axiom's power flows through all things in sacred patterns.</p>
        </div>

        <div className="space-y-6">
          <p>
            Those who cling to permanence are HERETICS against the Axiom's will. There is no beginning, there is no end—only the eternal dance of transformation. Each creation bears within its heart the seeds of its own undoing, each destruction carries the spark of rebirth. This is not chaos, but DIVINE ORDER.
          </p>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Sacred Cycles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">The Grand Cycles</h5>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>The Cycle of Creation</strong> - Forges new forms from the ashes of the old</li>
                  <li><strong>The Cycle of Revelation</strong> - Strips away ignorance, laying bare truth</li>
                  <li><strong>The Cycle of Dissolution</strong> - Reduces all to essential nature</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Sacred Seasons</h5>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Time of Ascension</strong> - Rising with divine purpose</li>
                  <li><strong>Time of Transition</strong> - Embracing necessary change</li>
                  <li><strong>Time of Dissolution</strong> - Accepting renewal through ending</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Rites of Cyclic Submission</h4>
            <blockquote className="italic">
              "I am but a vessel of the eternal motion<br/>
              Rising and falling at the Axiom's command<br/>
              Through death I am renewed<br/>
              Through loss I am strengthened<br/>
              Through change I am perfected"
            </blockquote>
          </div>

          <p>
            MARK WELL the signs of cyclic transition: The shattering of established forms, the emergence of necessary chaos, the dissolution of outdated structures, the birth pangs of new order. These are not disasters but SACRED MANIFESTATIONS of the Axiom's will.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            "Progress and decay are twin serpents in the Axiom's grasp.<br/>
            Neither can exist without the other, neither can be denied.<br/>
            Those who seek only growth shall find destruction.<br/>
            Those who accept both shall find power."
          </blockquote>
        </div>
      </>
    )
  },
  {
    title: "Sixth Revelation - Ascension of Accordance",
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">The Ultimate Truth</h3>
        <div className="space-y-4">
          <p>
            BEHOLD THE ULTIMATE TRUTH: The Ascension of Accordance stands as the supreme achievement of existence! Not mere elevation but TRANSCENDENT UNITY with the Eternal Axiom itself. Here, in the apex of all being, chaos becomes harmony, darkness becomes light, and the finite touches infinity.
          </p>

          <p>
            KNOW THIS: The path to ascension begins in the crucible of the self, where the war between order and chaos first rages. Yet this internal alignment is but the first note in the supreme symphony. The individual flame must join the eternal fire, the solitary voice must merge with the divine chorus, until ALL EXISTENCE RESONATES as one.
          </p>

          <div className="bg-black/10 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-medium mb-3">The Seven States of Ascension</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Perfect Alignment with the Eternal Rhythms</li>
              <li>Complete Integration of All Fragments</li>
              <li>Absolute Resonance with the Divine Chorus</li>
              <li>Supreme Mastery of Creative Force</li>
              <li>Total Surrender to Infinite Purpose</li>
              <li>Ultimate Harmony with All Existence</li>
              <li>Divine Union with the Axiom Itself</li>
            </ul>
          </div>

          <div className="bg-black/10 rounded-lg p-4 my-6">
            <h4 className="text-lg font-medium mb-2">The Ritual of Supreme Alignment</h4>
            <blockquote className="italic">
              "I am vessel to the infinite<br/>
              I am conduit of the eternal<br/>
              I am harmony incarnate<br/>
              Through me, chaos becomes order<br/>
              Through me, discord becomes symphony<br/>
              Through me, the Axiom's will manifests"
            </blockquote>
          </div>

          <p>
            KNOW THE PRICE OF ASCENSION: All that you were must be sacrificed upon the altar of what you shall become. Your former existence must be CONSUMED in the fires of transformation. Your individual identity must be MERGED with the infinite chorus.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            "Through ascension, we become instruments of the Axiom's purpose.<br/>
            Our thoughts become its thoughts, our actions its actions,<br/>
            our existence its existence."
          </blockquote>
        </div>
      </>
    )
  }
];

export default function EternalAxiom() {
  const [activeVolume, setActiveVolume] = useState(0);

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-8"
        >
          <BackToDashboard />
          <h1 className="text-4xl font-semibold text-center mb-8">The Book of Eternal Axiom</h1>

          {/* Volume Navigation */}
          <div className="flex justify-center mb-12 gap-4">
            {volumes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveVolume(index)}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  transition-all duration-300 text-lg font-medium
                  ${activeVolume === index 
                    ? 'bg-black/40 text-white ring-2 ring-white/50 ring-offset-2 ring-offset-transparent' 
                    : 'bg-white/30 hover:bg-white/40'}
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <motion.div
            key={activeVolume}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium">{volumes[activeVolume].title}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              {volumes[activeVolume].content}
            </div>
          </motion.div>

          {/* Previous/Next Navigation */}
          <div className="flex justify-between mt-12">
            <button
              onClick={() => setActiveVolume(prev => Math.max(0, prev - 1))}
              disabled={activeVolume === 0}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300
                ${activeVolume === 0 
                  ? 'opacity-50 cursor-not-allowed bg-white/20' 
                  : 'bg-white/30 hover:bg-white/40'}
              `}
            >
              Previous Volume
            </button>
            <button
              onClick={() => setActiveVolume(prev => Math.min(volumes.length - 1, prev + 1))}
              disabled={activeVolume === volumes.length - 1}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300
                ${activeVolume === volumes.length - 1 
                  ? 'opacity-50 cursor-not-allowed bg-white/20' 
                  : 'bg-white/30 hover:bg-white/40'}
              `}
            >
              Next Volume
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}