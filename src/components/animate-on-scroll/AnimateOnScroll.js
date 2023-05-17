import { LTRslideInAnimation } from '@/constants/animations'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function AnimateOnScroll({
  children,
  varient = LTRslideInAnimation,
  className
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className={className}>
      {isInView && <motion.div {...varient}>{children}</motion.div>}
    </section>
  )
}
