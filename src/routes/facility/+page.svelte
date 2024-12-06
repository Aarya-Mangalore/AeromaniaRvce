<script>
    import Content from "$lib/components/Content.svelte"
</script>

<main>

    <h1>
        Facilities in Aerospace department
    </h1>

    <Content Head="low subsonic Wind tunnel"
    text="A low subsonic wind tunnel is a research facility used to study airflow at speeds below Mach 1 (the speed of sound), typically ranging from 0 to 0.3 Mach. It is essential for testing aerodynamic properties of objects such as aircraft, vehicles, and other structures operating at low speeds. The tunnel creates controlled airflow to simulate real-world conditions, allowing engineers to analyze the effects of drag, lift, stability, and turbulence on various shapes. Key components of a low subsonic wind tunnel include a test section, fan or blower for air circulation, and sensors for measuring airspeed, pressure, and temperature. The data collected aids in optimizing designs for better performance, efficiency, and safety before physical prototypes are built. These wind tunnels are commonly used in industries like aerospace, automotive, and civil engineering."
    image="/images/facilities/lowsubsonic.jpg"
    />

    <Content Head="supersonic Wind tunnel"
    text="
A supersonic wind tunnel is designed to simulate airflow at speeds greater than Mach 1, typically ranging from Mach 1.5 to Mach 5 or higher. These tunnels are crucial for studying the behavior of objects at supersonic speeds, such as aircraft, missiles, and space vehicles, where compressibility effects, shock waves, and high-pressure differences come into play. Supersonic wind tunnels generate high-velocity airflow using specialized equipment like shock generators and nozzles that accelerate air to supersonic speeds. The data collected from these tests helps engineers understand aerodynamic forces, heat transfer, and shock wave interactions, enabling the design of efficient, high-speed vehicles that can withstand the extreme conditions of supersonic flight. These tunnels are often used in aerospace research, military applications, and advanced vehicle design."
    image="/images/facilities/supersonic.jpg"
    />

    <Content Head="Jet engine"
    text="A jet engine demo model is a scaled-down, non-functional replica of a real jet engine, designed to visually demonstrate the basic principles of jet propulsion and engine operation. These models typically feature transparent sections or cutaways to allow viewers to see the internal components, such as the compressor, turbine, combustion chamber, and exhaust nozzle. Some models may include moving parts to simulate airflow or airflow dynamics, helping students and enthusiasts understand how air is compressed, ignited, and expelled to generate thrust. While not capable of actual flight or propulsion, these models are valuable educational tools for explaining the mechanics and science behind jet engines in a hands-on, interactive way."
    image="/images/facilities/jetengine.jpg"
    />

    <Content Head="Cascade Wind tunnel"
    text="
A cascade wind tunnel is a specialized type of wind tunnel used primarily for testing the aerodynamics of turbine blades, airfoils, or other curved surfaces in a controlled airflow. It consists of a series of airfoils arranged in a cascade (a row of blades), through which air flows to simulate the conditions found in turbine engines, compressors, or propellers. The wind tunnel provides valuable data on the aerodynamic performance, such as lift, drag, and flow characteristics, of the blades under various operating conditions. Cascade wind tunnels are essential for optimizing blade designs, improving efficiency, and preventing issues like flow separation in high-speed applications such as jet engines or gas turbines."
    image="/images/facilities/cascade.jpg"
    />

    <Content Head="variable pitch propeller"
    text="A variable pitch propeller is a type of propeller used in aircraft and marine applications that allows the angle (pitch) of the blades to be adjusted during operation. This adjustment enables the propeller to optimize its efficiency for different flight conditions or speeds. In flight, pilots can change the blade angle to either increase thrust during takeoff or reduce drag and fuel consumption during cruise. The ability to change the pitch allows the engine to operate at its most efficient RPM across a wide range of speeds. This makes variable pitch propellers ideal for aircraft with varying operational demands, such as small planes, regional aircraft, and some marine vessels"
    image="/images/facilities/fixedpitch.jpg"
    />

    <Content Head="micro gas turbine"
    text="A micro gas turbine is a small-scale turbine engine that operates on the principle of converting high-temperature, high-pressure gases into mechanical energy. These turbines typically have a power output ranging from a few kilowatts to around 500 kW. They are compact, lightweight, and efficient, making them suitable for a variety of applications, such as in small aircraft, drones, power generation, and even as a backup power source. Micro gas turbines operate using fuel such as aviation gasoline, kerosene, or natural gas. Due to their high power-to-weight ratio and the ability to produce electricity or thrust, they are becoming increasingly popular in aerospace, automotive, and energy sectors"
    image="/images/facilities/microgasturbine.jpg"
    />

    <Content Head="fatigue testing Machine"
    text="A Fatigue Testing Machine is a device used to determine the endurance limit and fatigue life of materials and components under cyclic loading. It applies repeated stress or strain to a specimen to simulate real-world conditions and assess its durability over time. The machine helps analyze failure patterns, understand material behavior under varying load amplitudes, and ensure reliability in critical applications like aerospace, automotive, and structural engineering. These insights are crucial for designing components that can withstand prolonged operational stresses without catastrophic failure."
    image="/images/facilities/FTM.jpg"
    />

    <Content Head="Computer-Aided Engineering Design and Computational Mechanics Lab"
    text="It is a specialized facility used for designing and simulating engineering systems and structures. In this lab, students and researchers utilize CAD software to create detailed 2D and 3D models of mechanical components and assemblies. Computational mechanics tools are employed to perform simulations, such as finite element analysis (FEA), computational fluid dynamics (CFD), and stress analysis, to predict the performance of designs under various conditions. This lab is crucial for understanding material behaviors, optimizing designs, and ensuring safety and efficiency in real-world applications, particularly in fields like aerospace, automotive, and civil engineering."
    image="/images/facilities/CADlab.jpg"
    />

</main>

<style>

    h1{
        text-align: center;
        text-transform: uppercase;
        padding: 2%;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    @media (max-width: 768px) {
        h1
        {
            font-size: 1.8rem;
        }
    }
</style>