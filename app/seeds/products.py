from sqlalchemy import desc
from app.models import db, Product

def seed_products():
  product1 = Product(
    title="MMA Gloves (Leather)",
    description="Made of durable and high quality leather and premium stitching, these gloves are built to last.",
    price=99.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652340344/DojoDeals/gloves_vbtz6c.png",
    category="Training Gear"
  )
  product2 = Product(
    title="Gi (Blue)",
    description="A training gi of the highest quality.",
    price=99.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652340348/DojoDeals/gi_nkunia.png",
    category="Apparel"
  )
  product3 = Product(
    title="Muay Thai Pads",
    description="Premium Muay Thai/Kickboxing pads, suitable for multiple disciplines",
    price=149.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652400095/DojoDeals/thai_pads_hjt8wy.png",
    category="Equipment"
  )
  product4 = Product(
    title="Century BOB XL",
    description="The BOB XL features an extended torso that has over an extra foot in length of striking area, which takes the form of a lower abdominal area and shorts. You can practice throwing lower punches and kicks, as well as groin shots for tactical or self-defense training.",
    price=419.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652979266/DojoDeals/bob_zbtbne.png",
    category="Equipment"
  )
  product5 = Product(
    title="Winning Boxing Gloves",
    description="These 8oz boxing gloves are some of the best in the business. Handcrafted in Japan by Winning, these gloves will provide the ultimate protection and will last you a lifetime of training.",
    price=299.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652979719/DojoDeals/boxing_i2o7of.png",
    category="Training Gear"
  )
  product6 = Product(
    title="Fairtex Shin Guards",
    description="Constructed using Fairtex's durable Syntek Leather with triple layers of high impact foam core, hard on the outer layer and soft on the inner layer, for maximum shock disbursement.",
    price=79.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652979915/DojoDeals/shinguards_ssb4uv.png",
    category="Training Gear"
  )
  product7 = Product(
    title="SISU Mouth Guard",
    description="Smaller in size and price, the all new SISU® GO was made to be discreet and comfortable while protecting where most dental injuries happen. Equipped with Diffusix™ Technology, the perforations in SISU GO oscillate on impact and diffuse the forces to the scientifically designed crumple zones. The perforations also allow for natural flow of air and saliva, empowering athletes to talk, breathe and drink in sports where communication and hydration are key. A little dental protection goes a long way with SISU GO.",
    price=10.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652980116/DojoDeals/mouth_f1ek9k.png",
    category="Training Gear"
  )
  product8 = Product(
    title="Sanabul Rash Guard",
    description="Other rash guards constrict your movement and overheat your body. Sanabul’s mesh underarms and gradual compression keeps you agile and provides better ventilation",
    price=25.49,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652980369/DojoDeals/rash_ohyewt.png",
    category="Apparel"
  )
  product9 = Product(
    title="Venum Muay Thai Shorts",
    description="Keeping true to pure Thai fabrication, the Venum Giant Muay Thai Shorts are made of high quality satin material. These Venum shorts have a traditional waistband that keeps them well positioned around the hips, for complete freedom of movement. Side slits provide mobility, agility and flexibility for your strikes in the ring.",
    price=39.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652980612/DojoDeals/shorts_ndscyl.png",
    category="Apparel"
  )
  product10 = Product(
    title="Hand Wraps (150cm)",
    description="The all-new Rival Guerrero Hand wraps are the next level of evolution in our hand wrap line. A perfect hybrid of our Mexican Hand wraps and Traditional Cotton Hand wraps, the Guerrero wraps offer superior tension along with a thicker, comfortable wrap for added strength, comfort and protection.",
    price=9.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652980806/DojoDeals/wraps_jmxclf.png",
    category="Training Gear"
  )
  product11 = Product(
    title="FightWear Finger Tape",
    description="Introducing Tatami's newly-designed finger tape. Tatami know that the constant pulling, tugging and gripping in Jiu Jitsu often leads to one thing in the hands - pain. this has led them to greatly improve their finger tape, the zinc oxide tape has now been optimised to ensure strength and injury prevention.",
    price=4.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652980908/DojoDeals/tape_xdd7fk.png",
    category="Training Gear"
  )
  product12 = Product(
    title="Fairtex Trainer Vest",
    description="Thick padding on the front and sides to absorb push kicks and all body shots.",
    price=229.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652981006/DojoDeals/vest_dvrkiv.png",
    category="Training Gear"
  )
  product13 = Product(
    title="Fumetsu Thai Kick Shield",
    description="The Fumetsu Ghost Thai Kick Shield is the perfect training tool for leg kicks, side kicks, knees and more. Made from premium matte synthetic leather with riveted handles for durability, it is designed to last. The square curved design is perfect for leg kicks, while the comfortable padded handles make it ideal for use in training sessions.",
    price=99.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652981112/DojoDeals/kickshield_rakvzw.png",
    category="Equipment"
  )
  product14 = Product(
    title="Boxing Paddles",
    description="Ideal training aid to increase punching precision, speed & accuracy.",
    price=75.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652981193/DojoDeals/paddles_d1l38g.png",
    category="Equipment"
  )
  product15 = Product(
    title="Focus Mitts",
    description="The contoured palm area and secured hand compartment ensures that both trainer and fighter can train comfortably, getting the best out of the session. The High Density foam absorbs the shock from even the hardest punches protecting your sparring partner.",
    price=35.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652981347/DojoDeals/focusmitts_lkn22s.png",
    category="Equipment"
  )
  product16 = Product(
    title="Jump Rope (Black)",
    description="The Venum Thunder jump rope is ultra-light and boasts high performance. The mechanism is smooth and the metal gear cable is perfect for any level of the athlete.",
    price=12.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652981453/DojoDeals/rope_qjiubt.png",
    category="Equipment"
  )
  product17 = Product(
    title="Medicine/Wall Ball (12kg)",
    description="The Bytomic Wall Ball is made for exercises such as the wall throw exercise. It can also be used for other exercises such as pressing, throwing, squatting and lunging.",
    price=49.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652981546/DojoDeals/ball_ajjsel.png",
    category="Equipment"
  )
  product18 = Product(
    title="Head Guard",
    description="Curved and padded chin protector to avoid injury to your throat and for maximum comfort.",
    price=125.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652981679/DojoDeals/head_roci3j.png",
    category="Training Gear"
  )
  product19 = Product(
    title="Sports Bag (Black)",
    description="The Venum Stripes sports bag has a ventilated main compartment as well as secondary pockets on the side, front and upper parts.",
    price=75.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652981790/DojoDeals/bag_dq9bhx.png",
    category="Equipment"
  )
  product20 = Product(
    title="Pointfighter Glove",
    description="The Top Ten Glossy Block ITF Glove is an ITF approved pointfighter glove. Made with proven PPS foam that has been moulded in one piece, the foam has excellent damping properties. Your wrist is effectively protected with the addition of a 2cm impact zone around the wrist that helps disperse the impact from your strikes.",
    price=44.99,
    image="https://res.cloudinary.com/doulyb7dt/image/upload/v1652982005/DojoDeals/pointfighter_ucmqcf.png",
    category="Training Gear"
  )

  db.session.add(product1)
  db.session.add(product2)
  db.session.add(product3)
  db.session.add(product4)
  db.session.add(product5)
  db.session.add(product6)
  db.session.add(product7)
  db.session.add(product8)
  db.session.add(product9)
  db.session.add(product10)
  db.session.add(product11)
  db.session.add(product12)
  db.session.add(product13)
  db.session.add(product14)
  db.session.add(product15)
  db.session.add(product16)
  db.session.add(product17)
  db.session.add(product18)
  db.session.add(product19)
  db.session.add(product20)

  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
  db.session.commit()
