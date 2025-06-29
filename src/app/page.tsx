'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Briefcase, Heart, Trophy } from 'lucide-react';
import Image from 'next/image';

// 写真データ
const photos = [
  'S__8241403.jpg',
  'S__8241389_0.jpg',
  'S__8241391_0.jpg',
  'S__8241392_0.jpg',
  'S__8241393_0.jpg',
  'S__8241394_0.jpg',
  'S__8241395_0.jpg',
  'S__8241396.jpg',
  'S__8241397.jpg',
  'S__8241399.jpg',
  'S__8241400.jpg',
  'S__8241402.jpg'
];

// イベント実績データ（Example用）
const achievements = [
  {
    title: 'Example Tech Conference 2024',
    link: '#'
  },
  {
    title: 'Example Business Networking Event',
    link: '#'
  },
  {
    title: 'Example Creative Workshop',
    link: '#'
  },
  {
    title: 'Example Sports Tournament',
    link: '#'
  },
  {
    title: 'Example Charity Fundraiser',
    link: '#'
  },
  {
    title: 'Example Innovation Summit',
    link: '#'
  }
];

// アニメーション設定
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic gradient background with mesh pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0], 
              y: [0, 40, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-full blur-3xl"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear"
            }}
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 py-8 md:py-0 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Profile Image Section */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
                {/* Glowing ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm"></div>
                </motion.div>
                
                {/* Profile Image */}
                <motion.div 
                  className="absolute inset-2 rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/kota-profile.jpg"
                    alt="田中太郎"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Trophy size={20} className="text-white" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Briefcase size={16} className="text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content Section */}
            <motion.div 
              className="order-1 lg:order-2 text-left lg:text-left"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-white"
                {...fadeInUp}
                transition={{ delay: 0.1 }}
              >
                田中太郎
                <motion.span 
                  className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-2 opacity-90"
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  (たなか たろう)
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"
                {...fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                  イベント × マーケティング事業
                </p>
                <p className="text-base sm:text-lg md:text-xl opacity-90">
                  株式会社Example CEO
                </p>
                <p className="text-sm sm:text-base md:text-lg opacity-80 max-w-lg">
                  テクノロジー業界から起業家へ。<br className="sm:hidden" />
                  累計50本以上のイベント実績、<br className="sm:hidden" />
                  総フォロワー1,000万規模にリーチ。
                </p>
                <p className="text-xs sm:text-sm md:text-base opacity-70">
                  口癖は「Example First」
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                {...fadeInUp}
                transition={{ delay: 0.5 }}
              >
                <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/20">
                  <Briefcase size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">Portfolio</p>
                    <p className="text-xs opacity-80">View Work</p>
                  </div>
                </div>
                <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/20">
                  <Heart size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">Contact</p>
                    <p className="text-xs opacity-80">Get in Touch</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-white/60 text-xs font-medium">Scroll Down</span>
          <motion.div 
            className="w-1 h-12 bg-gradient-to-b from-white/80 to-transparent rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            About
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInLeft}>
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/kota-about.jpg"
                  alt="田中太郎"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div {...fadeInRight} className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                大阪府出身、東京・渋谷在住。1995年生まれ、29歳。
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                大手IT企業（22～26歳）でエンジニアとして経験を積み、<br className="sm:hidden" />
                その後スタートアップ企業でプロダクトマネージャーとして、<br className="sm:hidden" />
                デジタルマーケティング・アプリ開発を担当。
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                2023年に独立・起業し、<br className="sm:hidden" />
                株式会社Example CEOとして、<br className="sm:hidden" />
                Webサービス開発、<br className="md:hidden" />
                イベントプロデュース、コンサルティング事業を主軸に活動中。
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Event Organizer：<br className="sm:hidden" />
                Example Tech Meetup主催、<br className="md:hidden" />
                コミュニティ総フォロワー10万人規模、<br className="md:hidden" />
                月次イベントで平均80名集客を実現。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            経歴
          </motion.h2>
          
          <motion.div className="space-y-8" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {[
              {
                period: '2023年 - 現在',
                title: '株式会社Example CEO',
                description: '独立・起業。Webサービス開発、イベントプロデュース、コンサルティング事業を展開',
                icon: <Briefcase className="text-blue-600" size={24} />
              },
              {
                period: '2019年 - 2023年',
                title: 'Example Startup プロダクトマネージャー',
                description: 'デジタルマーケティング・アプリ開発プロジェクトを統括',
                icon: <Trophy className="text-purple-600" size={24} />
              },
              {
                period: '2017年 - 2019年',
                title: 'Example Tech ソフトウェアエンジニア',
                description: '大手IT企業でフルスタック開発エンジニアとして4年間勤務',
                icon: <Calendar className="text-green-600" size={24} />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-1">{item.period}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            事業内容
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: '① Webサービス開発',
                description: 'フルスタック開発、UI/UX設計、モバイルアプリ開発の3分野でサービスを提供。スタートアップから大企業まで幅広いクライアントの事業成長を支援。',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                title: '② Example Event プロデュース',
                description: 'Tech Meetup主催：Example Innovation Center開催。コミュニティ総フォロワー10万人、月次80名集客。エンジニア×起業家の交流機会を創出。累計50本以上のイベント実績。',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                title: '③ デジタル変革コンサルティング',
                description: 'スタートアップの「0→1」プロダクト開発から、「1→100」のスケール支援まで。自身の技術コミュニティ2,000名を活用したデジタル人材紹介。',
                gradient: 'from-blue-400 to-cyan-500'
              }
            ].map((business, index) => (
              <motion.div 
                key={index}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${business.gradient} rounded-t-3xl`}></div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {business.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {business.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            ギャラリー
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {photos.map((photo, index) => (
              <motion.div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={`/${photo}`}
                  alt={`Example Event ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            実績
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-lg"
              {...fadeInLeft}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Trophy className="text-yellow-500" size={28} />
                イベント実績
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <a 
                    key={index}
                    href={achievement.link}
                    target="_blank"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group"
                  >
                    <ExternalLink className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <span className="text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                      {achievement.title}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-lg"
              {...fadeInRight}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="text-red-500" size={28} />
                その他の肩書き・趣味
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">肩書き</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      フリーランス開発者
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">趣味</h4>
                  <div className="flex flex-wrap gap-2">
                    {['プログラミング', 'ロードバイク', 'カメラ', 'コーヒー', 'ボードゲーム', 'ハイキング', 'イベント企画', '読書'].map((hobby, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            {...fadeInUp}
          >
            お問い合わせ
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-12"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            ビジネスのご相談やイベントの企画など、<br className="sm:hidden" />
            お気軽にお声がけください
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm p-6 rounded-2xl transition-all duration-300 group"
              variants={fadeInUp}
            >
              <Briefcase className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">Email</p>
                <p className="text-white/80 text-sm">Contact us</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm p-6 rounded-2xl transition-all duration-300 group"
              variants={fadeInUp}
            >
              <Calendar className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">Schedule</p>
                <p className="text-white/80 text-sm">Book a Meeting</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <p className="text-gray-400">
          &copy; 2024 田中太郎. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
