import { motion } from 'framer-motion'

export default function TitlePage() {
  return (
    <section 
      className="min-h-screen flex flex-col md:flex-row items-center pr-0 py-0 relative w-full bg-[#0f0e0e] overflow-hidden"
      style={{ paddingLeft: 'clamp(24px, 120px, 120px)', gap: '40px' }}
      data-node-id="1128:237"
    >
      {/* Left Content Column */}
      <div 
        className="flex flex-col gap-6 items-start relative shrink-0 z-10 px-6 md:px-0"
        style={{ width: 'clamp(320px, 640px, 640px)', gap: '25px' }}
        data-node-id="1127:235"
      >
        {/* Logo */}
        <div 
          className="relative shrink-0"
          style={{ height: '47.763px', width: '242px' }}
          data-name="Logo"
          data-node-id="1127:227"
        >
          <div className="absolute bottom-[-0.84%] left-0 right-0 top-0" data-name="Icon" data-node-id="I1127:227;9175:804">
            {/* Autospend icon */}
            <div className="absolute bottom-[13.7%] left-0 right-[77.73%] top-0" data-name="Autospend icon" data-node-id="I1127:227;9162:1942">
              <div className="absolute bottom-0 right-[-0.03px] top-[1.14%] w-[26.232px]" data-name="Vector" data-node-id="I1127:227;9162:1942;9162:1939">
                <img alt="" className="block max-w-none w-full h-full" src="/images/autospend-logo-part1.svg" />
              </div>
              <div className="absolute bottom-[-0.04%] left-[0.86px] top-[60.69%] w-[26.016px]" data-name="Vector" data-node-id="I1127:227;9162:1942;9162:1940">
                <img alt="" className="block max-w-none w-full h-full" src="/images/autospend-logo-part2.svg" />
              </div>
            </div>
            {/* Autospend text */}
            <div className="absolute bottom-[-0.84%] left-[24.76%] right-0 top-[28.98%]" data-name="Autospend" data-node-id="I1127:227;9162:1810">
              <div className="absolute bottom-0 left-[0.06%] right-[0.23%] top-0" data-name="Autospend" data-node-id="I1127:227;9162:1810;46:586">
                <div className="absolute bottom-[0.68%] left-0 right-0 top-[1.09%]">
                  <img alt="" className="block max-w-none w-full h-full" src="/images/autospend-logo-text.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-['Anton',sans-serif] not-italic relative self-stretch text-white uppercase"
          style={{
            fontSize: '90px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '100%',
            letterSpacing: '-1.8px',
            textTransform: 'uppercase',
            color: '#FFF'
          }}
          data-node-id="1127:225"
        >
          The Stablecoin Bank <span style={{ color: '#666666' }}>for the</span> Global South
        </motion.p>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-['Figtree',sans-serif] not-italic relative self-stretch"
          style={{
            fontSize: 'clamp(16px, 20px, 20px)',
            color: 'rgba(255, 255, 255, 0.80)',
            fontFeatureSettings: '"salt" on',
            fontFamily: 'Figtree',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '32px',
            letterSpacing: '0.2px'
          }}
          data-node-id="1130:14330"
        >
          Starting in Nigeria, scaling across emerging markets
        </motion.p>
      </div>

      {/* Right Image Column */}
      <div 
        className="hidden md:block flex-grow h-[982px] min-h-px min-w-px relative shrink-0"
        data-node-id="1127:236"
      >
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover object-center pointer-events-none w-full h-full" 
          src="/images/title-hero-image.png"
          onError={(e) => {
            // Fallback if image doesn't load
            e.target.style.display = 'none'
          }}
        />
      </div>

      {/* World Illustration - Top Corner */}
      <div 
        className="absolute flex h-[473px] items-center justify-center hidden lg:flex"
        style={{
          left: '-107px',
          top: '-106px',
          width: '573.058px'
        }}
        data-name="World"
        data-node-id="1132:14332"
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full h-full">
          <div className="h-[473px] overflow-clip relative w-[573.058px]">
            <div className="absolute bottom-0 contents left-0 right-0 top-[-57.97%]" data-name="Clip path group" data-node-id="1132:14333">
              <div className="absolute contents inset-[13.42%_-29.97%_-25.88%_-21.61%]" data-name="Group" data-node-id="1132:14336">
                <div className="absolute contents inset-[13.42%_-29.97%_-25.88%_-21.61%]" data-name="Mask group" data-node-id="1132:14337">
                  <div 
                    className="absolute inset-[20.77%_-17.01%_-79.89%_-14.24%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg'), url('/images/world-mask2.svg')`,
                      maskImage: `url('/images/world-mask1.svg'), url('/images/world-mask2.svg')`,
                      WebkitMaskComposite: 'intersect',
                      maskComposite: 'intersect',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '97.476px, -74.268px -372.431px, -34.791px',
                      maskPosition: '97.476px, -74.268px -372.431px, -34.791px',
                      WebkitMaskSize: '573.058px 747.184px, 868.651px 531.953px',
                      maskSize: '573.058px 747.184px, 868.651px 531.953px'
                    }}
                    data-name="Group"
                    data-node-id="1132:14340"
                  >
                    <div className="absolute inset-[-0.05%]">
                      <img alt="" className="block max-w-none size-full" src="/images/world-base.svg" />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[45.23%_40.72%_51.73%_49.64%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg')`,
                      maskImage: `url('/images/world-mask1.svg')`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '-233.36px -488.141px',
                      maskPosition: '-233.36px -488.141px',
                      WebkitMaskSize: '573.058px 747.184px',
                      maskSize: '573.058px 747.184px'
                    }}
                    data-name="Vector"
                    data-node-id="1132:14342"
                  >
                    <div className="absolute inset-[-2.32%_-0.12%_-2.26%_-0.19%]">
                      <img alt="" className="block max-w-none size-full" src="/images/world-vector-0.svg" />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[47.84%_50.38%_42.04%_27.71%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg')`,
                      maskImage: `url('/images/world-mask1.svg')`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '-288.712px -500.464px',
                      maskPosition: '-288.712px -500.464px',
                      WebkitMaskSize: '573.058px 747.184px',
                      maskSize: '573.058px 747.184px'
                    }}
                    data-name="Vector"
                    data-node-id="1132:14343"
                  >
                    <div className="absolute inset-[-0.11%_-0.09%_-1.19%_-0.32%]">
                      <img alt="" className="block max-w-none size-full" src="/images/world-vector-1.svg" />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[52.46%_60%_28.2%_13.96%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg')`,
                      maskImage: `url('/images/world-mask1.svg')`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '-343.856px -522.306px',
                      maskPosition: '-343.856px -522.306px',
                      WebkitMaskSize: '573.058px 747.184px',
                      maskSize: '573.058px 747.184px'
                    }}
                    data-name="Vector"
                    data-node-id="1132:14344"
                  >
                    <div className="absolute inset-[-0.42%_-0.1%_-0.33%_-0.18%]">
                      <img alt="" className="block max-w-none size-full" src="/images/world-vector-2.svg" />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[29.97%_50.47%_51.85%_21.51%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg')`,
                      maskImage: `url('/images/world-mask1.svg')`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '-289.22px -415.941px',
                      maskPosition: '-289.22px -415.941px',
                      WebkitMaskSize: '573.058px 747.184px',
                      maskSize: '573.058px 747.184px'
                    }}
                    data-name="Vector"
                    data-node-id="1132:14345"
                  >
                    <div className="absolute inset-[-0.48%_-0.22%_-0.23%_-0.09%]">
                      <img alt="" className="block max-w-none size-full" src="/images/world-vector-3.svg" />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[48.31%_46.79%_4.88%_32.42%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg')`,
                      maskImage: `url('/images/world-mask1.svg')`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '-268.115px -502.707px',
                      maskPosition: '-268.115px -502.707px',
                      WebkitMaskSize: '573.058px 747.184px',
                      maskSize: '573.058px 747.184px'
                    }}
                    data-name="Vector"
                    data-node-id="1132:14346"
                  >
                    <div className="absolute inset-[-0.08%_-0.53%_-0.1%_-0.29%]">
                      <img alt="" className="block max-w-none size-full" src="/images/world-vector-4.svg" />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[54.77%_28.55%_2.56%_53.21%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg')`,
                      maskImage: `url('/images/world-mask1.svg')`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '-163.617px -533.222px',
                      maskPosition: '-163.617px -533.222px',
                      WebkitMaskSize: '573.058px 747.184px',
                      maskSize: '573.058px 747.184px'
                    }}
                    data-name="Vector"
                    data-node-id="1132:14347"
                  >
                    <div className="absolute inset-[-0.13%_-0.49%_-0.1%_-0.3%]">
                      <img alt="" className="block max-w-none size-full" src="/images/world-vector-5.svg" />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[70.73%_13.48%_13.04%_68.36%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg')`,
                      maskImage: `url('/images/world-mask1.svg')`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '-77.232px -608.729px',
                      maskPosition: '-77.232px -608.729px',
                      WebkitMaskSize: '573.058px 747.184px',
                      maskSize: '573.058px 747.184px'
                    }}
                    data-name="Vector"
                    data-node-id="1132:14348"
                  >
                    <div className="absolute inset-[-0.15%_-0.02%_-0.53%_-0.49%]">
                      <img alt="" className="block max-w-none size-full" src="/images/world-vector-6.svg" />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[25.02%_50.38%_51.91%_49.62%]"
                    style={{
                      WebkitMaskImage: `url('/images/world-mask1.svg')`,
                      maskImage: `url('/images/world-mask1.svg')`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: '-288.715px -392.541px',
                      maskPosition: '-288.715px -392.541px',
                      WebkitMaskSize: '573.058px 747.184px',
                      maskSize: '573.058px 747.184px'
                    }}
                    data-name="Vector"
                    data-node-id="1132:14349"
                  >
                    <div className="absolute bottom-0 left-[-0.38px] right-[-0.38px] top-0">
                      <img alt="" className="block max-w-none size-full" src="/images/world-vector-7.svg" />
                    </div>
                  </div>
                  <div className="absolute flex inset-[47.08%_49.56%_50.71%_48.63%] items-center justify-center">
                    <div className="flex-none h-[10.374px] rotate-[270deg] w-[10.426px]">
                      <div 
                        className="relative size-full"
                        style={{
                          WebkitMaskImage: `url('/images/world-mask1.svg')`,
                          maskImage: `url('/images/world-mask1.svg')`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskPosition: '-284.035px -496.879px',
                          maskPosition: '-284.035px -496.879px',
                          WebkitMaskSize: '573.058px 747.184px',
                          maskSize: '573.058px 747.184px'
                        }}
                        data-name="Vector"
                        data-node-id="1132:14350"
                      >
                        <img alt="" className="block max-w-none size-full" src="/images/world-vector-8.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[85.86%_12.57%_11.94%_85.62%] items-center justify-center">
                    <div className="flex-none h-[10.374px] rotate-[270deg] w-[10.426px]">
                      <div 
                        className="relative size-full"
                        style={{
                          WebkitMaskImage: `url('/images/world-mask1.svg')`,
                          maskImage: `url('/images/world-mask1.svg')`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskPosition: '-72.051px -680.287px',
                          maskPosition: '-72.051px -680.287px',
                          WebkitMaskSize: '573.058px 747.184px',
                          maskSize: '573.058px 747.184px'
                        }}
                        data-name="Vector"
                        data-node-id="1132:14351"
                      >
                        <img alt="" className="block max-w-none size-full" src="/images/world-vector-8.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[70.7%_85.13%_27.09%_13.06%] items-center justify-center">
                    <div className="flex-none h-[10.374px] rotate-[270deg] w-[10.426px]">
                      <div 
                        className="relative size-full"
                        style={{
                          WebkitMaskImage: `url('/images/world-mask1.svg')`,
                          maskImage: `url('/images/world-mask1.svg')`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskPosition: '-487.865px -608.608px',
                          maskPosition: '-487.865px -608.608px',
                          WebkitMaskSize: '573.058px 747.184px',
                          maskSize: '573.058px 747.184px'
                        }}
                        data-name="Vector"
                        data-node-id="1132:14352"
                      >
                        <img alt="" className="block max-w-none size-full" src="/images/world-vector-8.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative USDC Coin 1 - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden lg:flex absolute items-center justify-center"
        style={{
          left: '643px',
          top: '40px',
          height: '259.188px',
          width: '244.22px'
        }}
      >
        <div className="flex-none w-full h-full" style={{ transform: 'rotate(341.179deg)' }}>
          <div 
            className="relative w-full h-full"
            data-name="Image Container"
            data-node-id="1130:14317"
          >
            <img 
              alt="" 
              className="block max-w-none w-full h-full" 
              src="/images/usdc-coin-1.svg"
              onError={(e) => {
                e.target.src = '/images/usdc-logo.svg'
              }}
              />
            </div>
        </div>
          </motion.div>
          
      {/* Decorative USDC Coin 2 - Bottom Left */}
          <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden lg:flex absolute items-center justify-center"
        style={{
          left: '-76px',
          top: '623px',
          height: '271.551px',
          width: '255.829px'
        }}
      >
        <div className="flex-none w-full h-full" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
          <div 
            className="relative w-full h-full"
            data-name="Image Container"
            data-node-id="1130:14323"
          >
            <img 
              alt="" 
              className="block max-w-none w-full h-full" 
              src="/images/usdc-coin-2.svg"
              onError={(e) => {
                e.target.src = '/images/usdc-logo.svg'
              }}
            />
          </div>
        </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500 text-sm"
          >
            <div className="text-2xl mb-2">↓</div>
            <div>Scroll to explore</div>
          </motion.div>
        </motion.div>
    </section>
  )
}
