import type { Topic } from '../types'

export const topics: Record<string, Topic> = {
  "abstract-factory": {
    title: "Abstract Factory",
    note: "1. Abstract Factory.md",
    intro: "Families of related products, factory of factories, and the car manufacturing example.",
    questions: [
      {
        type: "mcq",
        q: "Which description best defines the Abstract Factory pattern?",
        options: [
          "It wraps an object to add behaviour at runtime.",
          "It provides an interface for creating families of related objects without specifying their concrete classes.",
          "It guarantees that a class has only one instance.",
          "It converts one interface into another that the client expects."
        ],
        answer: 1,
        explain: "Abstract Factory is a creational pattern that creates families of related or dependent objects through abstract interfaces. It is often called a 'factory of factories'."
      },
      {
        type: "tf",
        q: "In the Abstract Factory pattern, the client code typically calls <code>new Sedan()</code> or <code>new Hatchback()</code> directly.",
        answer: false,
        explain: "False. The client works through the abstract factory and abstract product interfaces. It is the concrete factory (for example <code>NorthAmericaCarFactory</code>) that decides which concrete product to instantiate."
      },
      {
        type: "fill",
        q: "Because a super-factory creates other factories, the Abstract Factory pattern is often called a 'factory of __________'.",
        answer: ["factories"],
        explain: "The abstract factory produces concrete factories, which in turn produce products. Hence 'factory of factories'."
      },
      {
        type: "mcq",
        q: "In the car example, <code>CarFactory</code> declares <code>createCar()</code> and <code>createSpecification()</code>. What does <code>NorthAmericaCarFactory.createCar()</code> return?",
        options: ["A new Hatchback", "A new Sedan", "A new CarSpecification", "null"],
        answer: 1,
        explain: "The North America factory creates a <code>Sedan</code> and a <code>NorthAmericaSpecification</code>, keeping every product in the same family consistent."
      },
      {
        type: "tf",
        q: "A benefit of Abstract Factory is that switching to a different product family can be done without modifying client code, because the client depends on abstract interfaces.",
        answer: true,
        explain: "True. The client only knows <code>CarFactory</code>, <code>Car</code> and <code>CarSpecification</code>, so swapping the concrete factory changes the family without touching client logic."
      },
      {
        type: "mcq",
        q: "Which is a listed DISADVANTAGE of the Abstract Factory pattern?",
        options: [
          "It prevents products from the same family being used together.",
          "Adding a new product type requires modifying the abstract factory interface.",
          "It forces the client to depend on concrete product classes.",
          "It cannot support the Open/Closed Principle."
        ],
        answer: 1,
        explain: "Every new product type needs a new creation method on the abstract factory, which ripples into all concrete factories. The pattern otherwise supports OCP for new families."
      }
    ]
  },

  "builder": {
    title: "Builder",
    note: "2. Builder.md",
    intro: "Step-by-step construction, directors, fluent methods and the computer example.",
    questions: [
      {
        type: "mcq",
        q: "What main problem does the Builder pattern solve?",
        options: [
          "It removes the need for interfaces in large systems.",
          "It constructs complex objects step by step and avoids telescoping constructors with many parameters.",
          "It allows incompatible interfaces to work together.",
          "It shares intrinsic state between thousands of objects."
        ],
        answer: 1,
        explain: "Builder separates construction from representation, so complex objects with many optional parts are built in readable steps instead of giant constructors."
      },
      {
        type: "tf",
        q: "A Director is mandatory in every Builder implementation.",
        answer: false,
        explain: "False. The notes describe the Director as optional. A client can call the builder steps itself, as shown with the fluent <code>ComputerBuilder</code> example."
      },
      {
        type: "fill",
        q: "Builder methods that return the builder itself (for example <code>return this;</code>) enable method __________.",
        answer: ["chaining", "chaining.", "method chaining"],
        explain: "Returning <code>this</code> lets calls be chained: <code>new Computer.ComputerBuilder(...).setGraphicsCardEnabled(true).setBluetoothEnabled(true).build()</code>."
      },
      {
        type: "mcq",
        q: "What is the role of the Director in the computer example?",
        options: [
          "It stores the final Computer object.",
          "It defines the interface for building parts.",
          "It controls the order in which the builder's construction steps are called.",
          "It validates the product after it is built."
        ],
        answer: 2,
        explain: "<code>ComputerDirector.construct(Builder)</code> calls <code>buildCPU()</code>, <code>buildRAM()</code> and <code>buildStorage()</code> in a fixed order. It does not know the concrete builder."
      },
      {
        type: "fill",
        q: "In the fluent example, the final method that assembles and returns the product is called __________.",
        answer: ["build()", "build"],
        explain: "<code>build()</code> performs final validation (for example, throwing <code>IllegalStateException</code> when RAM or HDD is missing) and returns the immutable <code>Computer</code>."
      },
      {
        type: "tf",
        q: "The Builder pattern can produce different variations of a product using the same construction process.",
        answer: true,
        explain: "True. Different concrete builders (for example a gaming builder versus an office builder) can follow the same steps to produce different representations."
      }
    ]
  },

  "factory-method": {
    title: "Factory Method",
    note: "3. Factory Method.md",
    intro: "Encapsulating object creation behind a method, plus the AnimalFactory example.",
    questions: [
      {
        type: "mcq",
        q: "To which Gang of Four category does the Factory Method pattern belong?",
        options: ["Creational", "Structural", "Behavioural", "Architectural"],
        answer: 0,
        explain: "Factory Method is creational: it deals with how objects are created."
      },
      {
        type: "tf",
        q: "With a factory method, the client code still needs to know and instantiate the concrete class it wants, for example <code>new Dog()</code>.",
        answer: false,
        explain: "False. The client asks the factory for an <code>Animal</code> and never names the concrete class. Creation logic is centralised in the factory."
      },
      {
        type: "fill",
        q: "A factory method encapsulates object __________ logic so the client does not need to know which concrete class is created.",
        answer: ["creation", "creation.", "instantiation"],
        explain: "Encapsulating creation is the core idea: the client depends on the product interface, not on concrete constructors."
      },
      {
        type: "mcq",
        q: "In the notes, what does <code>AnimalFactory.getAnimal(\"BIRD\")</code> return, given that only DOG and CAT are handled?",
        options: ["A new Bird object", "A new Dog object", "null", "It throws an exception"],
        answer: 2,
        explain: "The method returns <code>null</code> for an unrecognised type. It also returns <code>null</code> when the input is <code>null</code>."
      },
      {
        type: "tf",
        q: "Adding a Bird type requires changing the client code that calls <code>getAnimal()</code>.",
        answer: false,
        explain: "False. You add a <code>Bird</code> class and update the factory. Client calls such as <code>AnimalFactory.getAnimal(\"DOG\")</code> remain unchanged."
      },
      {
        type: "mcq",
        q: "Which is a stated advantage of the Factory Method pattern?",
        options: [
          "It removes the need for interfaces.",
          "It decouples the client from concrete classes, making new types easier to add.",
          "It guarantees a single instance of the product.",
          "It allows an object's algorithm to change at runtime."
        ],
        answer: 1,
        explain: "Separation of concerns and easier extension are the main advantages. A new type needs a new class plus a factory update, without touching client code."
      }
    ]
  },

  "singleton": {
    title: "Singleton",
    note: "4. Singleton.md",
    intro: "One instance, a private constructor and a global access point.",
    questions: [
      {
        type: "mcq",
        q: "Which combination of elements is essential to a basic Singleton implementation in Java?",
        options: [
          "A public constructor and an instance method.",
          "A static field holding the instance, a private constructor, and a static <code>getInstance()</code> method.",
          "An abstract class with a factory method.",
          "A list of observers and a notify method."
        ],
        answer: 1,
        explain: "The static member holds the one instance, the private constructor blocks outside creation, and the static factory method returns the shared instance."
      },
      {
        type: "tf",
        q: "The Singleton pattern is a creational design pattern.",
        answer: true,
        explain: "True. It controls object creation so that exactly one instance exists."
      },
      {
        type: "fill",
        q: "The static method that provides global access to the single instance is usually called __________.",
        answer: ["getInstance()", "getInstance", "getinstance()", "getinstance"],
        explain: "A typical implementation checks whether the static field is null, creates the instance if needed, and then returns it."
      },
      {
        type: "mcq",
        q: "What does lazy initialisation mean in a Singleton?",
        options: [
          "The instance is created when the class is first loaded.",
          "The instance is created only when it is first requested.",
          "The instance is created on a background thread.",
          "The instance is recreated for every caller."
        ],
        answer: 1,
        explain: "Lazy initialisation delays creation until <code>getInstance()</code> is first called. Eager initialisation creates it at class-load time."
      },
      {
        type: "tf",
        q: "Singleton is easy to unit test because every test receives a fresh, independent instance.",
        answer: false,
        explain: "False. Shared global state makes tests interfere with each other and makes mocking harder. The notes list difficult unit testing as a limitation."
      },
      {
        type: "mcq",
        q: "Which is a typical real-world use of Singleton?",
        options: [
          "Creating families of database products.",
          "Central logging or configuration management.",
          "Adding toppings to a coffee at runtime.",
          "Traversing a collection without exposing its structure."
        ],
        answer: 1,
        explain: "Logging systems, configuration managers, database connections and thread pools are all listed uses where one shared instance is desirable."
      }
    ]
  },

  "adapter": {
    title: "Adapter",
    note: "5. Adapter.md",
    intro: "Bridging incompatible interfaces without changing the adaptee.",
    questions: [
      {
        type: "mcq",
        q: "The Adapter pattern belongs to which category?",
        options: ["Creational", "Structural", "Behavioural", "Concurrency"],
        answer: 1,
        explain: "Adapter is structural: it composes classes and objects so incompatible interfaces can collaborate."
      },
      {
        type: "fill",
        q: "The existing class with the incompatible interface that must be integrated is called the __________.",
        answer: ["adaptee", "adaptee.", "the adaptee"],
        explain: "The Adapter wraps the Adaptee and implements the Target interface expected by the client."
      },
      {
        type: "tf",
        q: "A correct Adapter implementation requires editing the source code of the legacy or third-party class.",
        answer: false,
        explain: "False. The whole point is to leave the adaptee untouched. You add an adapter that translates calls from the target interface to the adaptee's methods."
      },
      {
        type: "mcq",
        q: "In the notes, <code>PrinterAdapter</code> adapts <code>LegacyPrinter</code>. How is the adaptation achieved?",
        options: [
          "It overrides <code>printDocument()</code> in <code>LegacyPrinter</code>.",
          "Its <code>print()</code> method calls <code>legacyPrinter.printDocument()</code>.",
          "It makes <code>LegacyPrinter</code> extend <code>Printer</code>.",
          "It changes the client to call <code>printDocument()</code>."
        ],
        answer: 1,
        explain: "<code>PrinterAdapter implements Printer</code> and holds a <code>LegacyPrinter</code>. Its <code>print()</code> simply delegates to <code>printDocument()</code>."
      },
      {
        type: "tf",
        q: "In the Object Adapter variant, the adapter holds a reference to the adaptee and uses composition.",
        answer: true,
        explain: "True. Object Adapter uses composition. The Class Adapter variant instead uses inheritance."
      },
      {
        type: "mcq",
        q: "After adaptation, how much does the client know about the adapter and adaptee details?",
        options: [
          "It must import and construct the adaptee directly.",
          "It depends only on the target interface and remains unaware of the adapter's presence.",
          "It must check which adapter is in use at runtime.",
          "It must call both <code>print()</code> and <code>printDocument()</code>."
        ],
        answer: 1,
        explain: "The client talks to the Target interface. It is unaware of how the adapter translates the request."
      }
    ]
  },

  "bridge": {
    title: "Bridge",
    note: "6. Bridge.md",
    intro: "Separating abstraction from implementation so both vary independently.",
    questions: [
      {
        type: "mcq",
        q: "What is the primary purpose of the Bridge pattern?",
        options: [
          "To create one shared instance of a class.",
          "To separate an abstraction from its implementation so both can vary independently.",
          "To evaluate expressions defined by a grammar.",
          "To add behaviour by wrapping objects."
        ],
        answer: 1,
        explain: "Bridge decouples abstraction from implementation, usually by using composition instead of a permanent inheritance binding."
      },
      {
        type: "tf",
        q: "The Bridge pattern achieves decoupling by relying on inheritance rather than composition.",
        answer: false,
        explain: "False. Bridge prefers composition: the abstraction holds a reference to an implementer and delegates work to it."
      },
      {
        type: "fill",
        q: "The interface that defines the implementation classes in the Bridge pattern is called the __________.",
        answer: ["implementer", "implementer.", "implementation"],
        explain: "The Implementer defines the implementation interface. Concrete implementations such as <code>Produce</code> and <code>Assemble</code> implement it."
      },
      {
        type: "mcq",
        q: "In the vehicle example, which part is the Abstraction?",
        options: ["<code>Workshop</code>", "<code>Produce</code>", "<code>Vehicle</code>", "<code>Assemble</code>"],
        answer: 2,
        explain: "<code>Vehicle</code> is the abstraction, with <code>Car</code> and <code>Bike</code> as refined abstractions. <code>Workshop</code> is the implementer."
      },
      {
        type: "tf",
        q: "A change in a concrete implementation class forces the client code to change.",
        answer: false,
        explain: "False. The client interacts with the abstraction, so implementation changes are hidden from it."
      },
      {
        type: "mcq",
        q: "Which statement correctly contrasts Adapter and Bridge?",
        options: [
          "Adapter makes incompatible interfaces work together; Bridge separates an abstraction from its implementation so both vary independently.",
          "Adapter separates abstraction from implementation; Bridge adapts incompatible interfaces.",
          "Both patterns are creational and have the same intent.",
          "Bridge wraps objects to add behaviour; Adapter builds objects step by step."
        ],
        answer: 0,
        explain: "Adapter is about compatibility with existing interfaces. Bridge is about designing two dimensions that can evolve independently."
      }
    ]
  },

  "composite": {
    title: "Composite",
    note: "7. Composite.md",
    intro: "Tree structures where leaves and composites are treated uniformly.",
    questions: [
      {
        type: "mcq",
        q: "What does the Composite pattern allow a client to do?",
        options: [
          "Treat individual objects and groups of objects uniformly through a common interface.",
          "Share intrinsic state between thousands of objects.",
          "Convert a legacy interface into a new one.",
          "Change an object's algorithm at runtime."
        ],
        answer: 0,
        explain: "Composite organises objects into tree structures. Leaves and composites implement the same component interface, so the client does not distinguish them."
      },
      {
        type: "fill",
        q: "In the Composite pattern, an object that has no children is called a __________.",
        answer: ["leaf", "leaf.", "a leaf"],
        explain: "A Leaf is an individual object that performs the actual work and cannot contain children, such as a <code>File</code>."
      },
      {
        type: "tf",
        q: "In the file system example, a <code>Directory</code> can contain both files and other directories.",
        answer: true,
        explain: "True. <code>Directory</code> holds a list of <code>FileSystemComponent</code>, which may be a <code>File</code> (leaf) or another <code>Directory</code> (composite)."
      },
      {
        type: "mcq",
        q: "How does <code>Directory.display()</code> handle its children?",
        options: [
          "It prints only the directory name and ignores the children.",
          "It loops over its components and calls <code>display()</code> on each one.",
          "It converts every child to a <code>File</code> first.",
          "It asks the client to display each child."
        ],
        answer: 1,
        explain: "The composite forwards the same request to each child recursively. This is why a single <code>display()</code> call can render a whole tree."
      },
      {
        type: "tf",
        q: "The client must check <code>instanceof File</code> or <code>instanceof Directory</code> before calling <code>display()</code>.",
        answer: false,
        explain: "False. The client uses the common <code>FileSystemComponent</code> interface and treats leaves and composites uniformly."
      },
      {
        type: "mcq",
        q: "Which is a listed disadvantage of the Composite pattern?",
        options: [
          "It cannot represent hierarchical structures.",
          "It forces clients to write type checks.",
          "The common interface may allow invalid operations, reducing type safety.",
          "It prevents adding or removing children."
        ],
        answer: 2,
        explain: "A broad common interface can expose operations that are meaningless for some node types, which limits compile-time type safety. Deep traversal also adds performance overhead."
      }
    ]
  },

  "decorator": {
    title: "Decorator",
    note: "8. Decorator.md",
    intro: "Wrapping objects to add behaviour dynamically, with the coffee example.",
    questions: [
      {
        type: "mcq",
        q: "What does the Decorator pattern do?",
        options: [
          "It wraps an object to add behaviour dynamically without changing the object's class.",
          "It guarantees that a class has only one instance.",
          "It defines a family of algorithms and makes them interchangeable.",
          "It converts a class's interface into another interface."
        ],
        answer: 0,
        explain: "Decorators implement the same interface as the component they wrap, so they can be nested to compose behaviour at runtime."
      },
      {
        type: "fill",
        q: "A decorator keeps a reference to the wrapped object and delegates calls to it. This relationship is an example of __________.",
        answer: ["composition", "composition.", "aggregation", "aggregation."],
        explain: "The decorator holds a <code>Component</code> reference (composition/aggregation) instead of inheriting from the concrete component."
      },
      {
        type: "mcq",
        q: "Using the notes' prices, what is <code>new SugarDecorator(new MilkDecorator(new PlainCoffee())).getCost()</code>?",
        options: ["$2.00", "$2.50", "$2.70", "$2.90"],
        answer: 2,
        explain: "Plain coffee is $2.00, milk adds $0.50 and sugar adds $0.20, giving $2.70."
      },
      {
        type: "tf",
        q: "Decorators can be nested, for example <code>new SugarDecorator(new MilkDecorator(new PlainCoffee()))</code>.",
        answer: true,
        explain: "True. Because every decorator is also a <code>Coffee</code>, decorators can wrap other decorators."
      },
      {
        type: "mcq",
        q: "When <code>cost()</code> is called on the outermost decorator in a chain, which call happens first?",
        options: [
          "The innermost plain object's <code>cost()</code>.",
          "The middle decorator's <code>cost()</code>.",
          "The outermost decorator's <code>cost()</code>, which then delegates inward.",
          "All decorators run simultaneously in parallel."
        ],
        answer: 2,
        explain: "Control enters the outermost decorator first. It performs its own work and/or calls the wrapped object's method, so the chain unwinds from outside to inside."
      },
      {
        type: "tf",
        q: "Decorator requires modifying the original concrete component class whenever a new add-on is introduced.",
        answer: false,
        explain: "False. You add a new decorator class instead. Existing classes stay closed for modification, which supports the Open/Closed Principle."
      }
    ]
  },

  "flyweight": {
    title: "Flyweight",
    note: "9. Flyweight.md",
    intro: "Sharing intrinsic state to reduce memory use, with the icon factory example.",
    questions: [
      {
        type: "mcq",
        q: "What is the main goal of the Flyweight pattern?",
        options: [
          "To reduce memory usage by sharing common object data among many objects.",
          "To decouple an abstraction from its implementation.",
          "To notify many observers when a subject changes.",
          "To encapsulate a request as an object."
        ],
        answer: 0,
        explain: "Flyweight is a structural pattern for memory optimisation, reusing shared objects instead of creating thousands of duplicates."
      },
      {
        type: "fill",
        q: "State that is shared between flyweight objects is called __________ state.",
        answer: ["intrinsic", "intrinsic.", "intrinsic state"],
        explain: "Intrinsic state lives inside the flyweight and is shared. Extrinsic state is supplied by the client and differs per use."
      },
      {
        type: "tf",
        q: "The position of an icon on the screen is intrinsic state in the notes' example.",
        answer: false,
        explain: "False. Position is extrinsic state: it is unique per drawing operation and is passed to <code>draw(x, y)</code>. The image, type and colour are intrinsic."
      },
      {
        type: "mcq",
        q: "If the client calls <code>iconFactory.getIcon(\"file\")</code> twice, what does the factory return the second time?",
        options: [
          "A brand-new <code>FileIcon</code> object.",
          "The same cached <code>FileIcon</code> instance already stored in the map.",
          "<code>null</code>.",
          "It throws <code>IllegalArgumentException</code>."
        ],
        answer: 1,
        explain: "The factory checks its cache first and returns the existing flyweight, which is the sharing that saves memory."
      },
      {
        type: "mcq",
        q: "Which real-life example is used in the notes for Flyweight?",
        options: [
          "A remote control operating a TV and stereo.",
          "Thousands of text-editor characters sharing font, size and style.",
          "A coffee order with milk and sugar.",
          "A weather station notifying phone and TV displays."
        ],
        answer: 1,
        explain: "Text editor characters, traffic signals and trees in a forest game are the listed examples of shared intrinsic state."
      },
      {
        type: "tf",
        q: "Flyweight is a good fit when objects are highly unique and share almost nothing.",
        answer: false,
        explain: "False. If little state can be shared, the extra complexity of splitting intrinsic and extrinsic state brings no benefit."
      }
    ]
  },

  "command": {
    title: "Command",
    note: "10. Command.md",
    intro: "Requests as objects, invokers and receivers, with the remote-control example.",
    questions: [
      {
        type: "mcq",
        q: "What does the Command pattern encapsulate?",
        options: [
          "A family of algorithms.",
          "A request as an object, decoupling the sender from the receiver.",
          "A shared pool of intrinsic state.",
          "A tree of grammar expressions."
        ],
        answer: 1,
        explain: "Turning a request into an object lets it be stored, queued, logged or undone, and the invoker does not need to know the receiver."
      },
      {
        type: "fill",
        q: "The Command interface typically declares a single method named __________.",
        answer: ["execute()", "execute", "execute()."],
        explain: "Concrete commands implement <code>execute()</code> and call the appropriate method on their receiver."
      },
      {
        type: "mcq",
        q: "In the smart-home example, which object is the Invoker?",
        options: ["<code>TV</code>", "<code>Stereo</code>", "<code>RemoteControl</code>", "<code>TurnOnCommand</code>"],
        answer: 2,
        explain: "<code>RemoteControl</code> triggers <code>command.execute()</code> without knowing what device or action is behind the command. TV and Stereo are receivers."
      },
      {
        type: "tf",
        q: "The Command pattern can support undo, redo, logging and job queues because commands are objects.",
        answer: true,
        explain: "True. Once a request is an object it can be stored in history, persisted to a queue, or logged, enabling undo/redo and deferred execution."
      },
      {
        type: "mcq",
        q: "When a new device command is added, what must change in the <code>RemoteControl</code> invoker?",
        options: [
          "It must be rewritten to know the new device.",
          "Nothing: it only depends on the <code>Command</code> interface.",
          "A new <code>if</code> branch must be added for the device.",
          "The <code>Command</code> interface must add a method for the device."
        ],
        answer: 1,
        explain: "The invoker is decoupled. You add a new concrete command and receiver; <code>RemoteControl</code> continues to call <code>execute()</code>."
      },
      {
        type: "mcq",
        q: "Which pairing of components is correct?",
        options: [
          "Invoker performs the real work; Receiver triggers the command.",
          "Command holds the receiver; Concrete Command calls the receiver's operation in <code>execute()</code>.",
          "Receiver declares <code>execute()</code>; Invoker implements it.",
          "Client performs the operation; Command only stores data."
        ],
        answer: 1,
        explain: "A concrete command holds a receiver and invokes its operation. The invoker only triggers <code>execute()</code>."
      }
    ]
  },

  "visitor": {
    title: "Visitor",
    note: "11. Visitor.md",
    intro: "Adding operations to a fixed set of element classes via double dispatch.",
    questions: [
      {
        type: "mcq",
        q: "What is the main benefit of the Visitor pattern?",
        options: [
          "It lets you add new operations to existing object structures without modifying their classes.",
          "It guarantees a single shared instance.",
          "It converts incompatible interfaces.",
          "It reduces memory by sharing objects."
        ],
        answer: 0,
        explain: "Operations live in visitor classes, so new operations mean new visitors rather than edits to every element class."
      },
      {
        type: "fill",
        q: "Each element implements an __________ method that takes a visitor as an argument.",
        answer: ["accept", "accept()", "accept.", "accept(visitor)"],
        explain: "The element's <code>accept(visitor)</code> calls the matching <code>visitor.visit(this)</code>, which selects the right operation at runtime."
      },
      {
        type: "mcq",
        q: "In the shapes example, what does <code>Circle.accept(visitor)</code> do?",
        options: [
          "It calculates the area itself.",
          "It calls <code>visitor.visit(this)</code>.",
          "It creates a new <code>AreaCalculator</code>.",
          "It converts itself into a <code>Square</code>."
        ],
        answer: 1,
        explain: "The element passes itself to the visitor. This double dispatch is what lets the visitor choose the type-specific <code>visit</code> overload."
      },
      {
        type: "tf",
        q: "Adding a new operation to the shape hierarchy requires editing <code>Circle</code>, <code>Square</code> and <code>Triangle</code>.",
        answer: false,
        explain: "False. You add a new visitor class implementing <code>ShapeVisitor</code>. The element classes remain unchanged."
      },
      {
        type: "tf",
        q: "Adding a new element type (for example <code>Rectangle</code>) requires updating every existing visitor.",
        answer: true,
        explain: "True. The visitor interface must gain a new <code>visit(Rectangle)</code> method, so all concrete visitors need updating. This is the pattern's main trade-off."
      },
      {
        type: "mcq",
        q: "To which category does Visitor belong?",
        options: ["Creational", "Structural", "Behavioural", "Architectural"],
        answer: 2,
        explain: "Visitor is behavioural: it defines operations on objects and separates algorithms from the object structure."
      }
    ]
  },

  "interpreter": {
    title: "Interpreter",
    note: "12. Interpreter.md",
    intro: "Grammar as classes, expression trees and evaluating arithmetic.",
    questions: [
      {
        type: "mcq",
        q: "What does the Interpreter pattern represent?",
        options: [
          "A way to create families of related objects.",
          "Language grammar rules as classes that interpret expressions in a tree structure.",
          "A way to wrap an object to add behaviour.",
          "A one-to-many notification mechanism."
        ],
        answer: 1,
        explain: "Each grammar rule becomes a class. Expressions combine into an abstract syntax tree that is evaluated by calling <code>interpret()</code>."
      },
      {
        type: "fill",
        q: "An expression that represents a basic element of the language, such as a number, is called a __________ expression.",
        answer: ["terminal", "terminal.", "terminal expression"],
        explain: "Terminal expressions are the leaves of the AST. Non-terminal expressions combine child expressions, such as addition or multiplication."
      },
      {
        type: "mcq",
        q: "For the expression <code>2 + 3 * 4</code> built as <code>Addition(2, Multiplication(3, 4))</code>, what does <code>interpret()</code> return?",
        options: ["20", "14", "9", "24"],
        answer: 1,
        explain: "The multiplication subtree evaluates to 12, then addition gives 2 + 12 = 14."
      },
      {
        type: "tf",
        q: "The Context component stores global information needed during interpretation, such as variables or state.",
        answer: true,
        explain: "True. Context carries shared data that expressions may consult while interpreting."
      },
      {
        type: "mcq",
        q: "When is the Interpreter pattern a poor choice?",
        options: [
          "When the grammar is well-defined and needs step-by-step evaluation.",
          "When the grammar is very complex and performance is critical.",
          "When you are building a small domain-specific language.",
          "When expressions can be represented as a tree."
        ],
        answer: 1,
        explain: "Large grammars create many expression classes and interpretation adds runtime overhead, so complex or performance-critical grammars should avoid it."
      },
      {
        type: "tf",
        q: "The client in the interpreter example manually builds an AST and calls <code>interpret()</code> on the root expression.",
        answer: true,
        explain: "True. The client composes <code>NumberExpression</code> and operator expression objects, then evaluates the root."
      }
    ]
  },

  "observer": {
    title: "Observer",
    note: "13. Observer.md",
    intro: "One-to-many notification between a subject and its observers.",
    questions: [
      {
        type: "mcq",
        q: "What relationship does the Observer pattern create between a subject and its observers?",
        options: [
          "One-to-one",
          "One-to-many: one subject notifies many observers",
          "Many-to-one: many subjects notify one observer",
          "Many-to-many through a broker"
        ],
        answer: 1,
        explain: "A subject keeps a list of observers and notifies all of them when its state changes."
      },
      {
        type: "fill",
        q: "When the subject's state changes, it calls __________ to inform every registered observer.",
        answer: ["notifyObservers()", "notifyobservers()", "notifyobservers", "notifyObservers", "notifyObservers()."],
        explain: "<code>notifyObservers()</code> loops over the observer list and calls each observer's <code>update()</code> method."
      },
      {
        type: "tf",
        q: "In the Observer pattern, every observer must know about every other observer so they can update together.",
        answer: false,
        explain: "False. Observers are loosely coupled: they know only the subject interface and receive updates through <code>update()</code>. They do not know each other."
      },
      {
        type: "mcq",
        q: "Which methods does the Subject interface in the notes provide?",
        options: [
          "<code>execute()</code> and <code>undo()</code>",
          "<code>addObserver()</code>, <code>removeObserver()</code> and <code>notifyObservers()</code>",
          "<code>build()</code> and <code>getResult()</code>",
          "<code>hasNext()</code> and <code>next()</code>"
        ],
        answer: 1,
        explain: "These three methods manage the subscription list and push updates to observers."
      },
      {
        type: "mcq",
        q: "In the weather example, what happens after <code>weatherStation.removeObserver(tvDisplay)</code> and then <code>setWeather(\"Windy\")</code>?",
        options: [
          "Both displays update.",
          "Only the TV display updates.",
          "Only the phone display updates.",
          "Neither display updates because the subject is broken."
        ],
        answer: 2,
        explain: "The removed observer is no longer in the list, so only the remaining phone display receives the update."
      },
      {
        type: "tf",
        q: "The Observer pattern promotes loose coupling between the subject and its observers.",
        answer: true,
        explain: "True. The subject depends on the observer interface, and observers can be added or removed at runtime without changing the subject."
      }
    ]
  },

  "iterator": {
    title: "Iterator",
    note: "14. Iterator.md",
    intro: "Sequential traversal without exposing a collection's internals.",
    questions: [
      {
        type: "mcq",
        q: "What does the Iterator pattern allow?",
        options: [
          "Sequential access to collection elements without exposing the collection's internal structure.",
          "Sharing intrinsic state between objects.",
          "Creating objects step by step.",
          "Adding operations to element classes."
        ],
        answer: 0,
        explain: "The iterator encapsulates traversal details, so the client can walk a collection without knowing whether it is an array, list or something else."
      },
      {
        type: "fill",
        q: "The two core methods in the Iterator interface in the notes are <code>next()</code> and __________.",
        answer: ["hasNext()", "hasnext()", "hasNext", "hasnext"],
        explain: "<code>hasNext()</code> reports whether more elements remain; <code>next()</code> returns the next element and advances the position."
      },
      {
        type: "mcq",
        q: "Which method does the Aggregate interface declare?",
        options: ["<code>execute()</code>", "<code>createIterator()</code>", "<code>update()</code>", "<code>accept()</code>"],
        answer: 1,
        explain: "A concrete aggregate such as <code>Company</code> returns an <code>Iterator</code> over its elements via <code>createIterator()</code>."
      },
      {
        type: "tf",
        q: "The Iterator pattern supports multiple simultaneous traversals of the same collection.",
        answer: true,
        explain: "True. Each iterator keeps its own position, so several traversals can run independently."
      },
      {
        type: "mcq",
        q: "What happens in the notes' <code>EmployeeIterator.next()</code> when there are no elements left?",
        options: [
          "It returns <code>null</code>.",
          "It returns the last employee again.",
          "It throws <code>NoSuchElementException</code>.",
          "It resets the index to 0."
        ],
        answer: 2,
        explain: "<code>next()</code> checks <code>hasNext()</code> and throws <code>NoSuchElementException</code> when the traversal is finished."
      },
      {
        type: "mcq",
        q: "To which category does Iterator belong?",
        options: ["Creational", "Structural", "Behavioural", "Architectural"],
        answer: 2,
        explain: "Iterator is behavioural: it deals with how objects interact and how traversal is performed."
      }
    ]
  },

  "strategy": {
    title: "Strategy",
    note: "15. Strategy.md",
    intro: "Interchangeable algorithms chosen and swapped at runtime.",
    questions: [
      {
        type: "mcq",
        q: "What does the Strategy pattern do?",
        options: [
          "Encapsulates a family of algorithms in separate classes and makes them interchangeable at runtime.",
          "Ensures only one instance of a class exists.",
          "Builds complex objects step by step.",
          "Wraps an object to add behaviour."
        ],
        answer: 0,
        explain: "The context delegates to a strategy object, and the client can replace that strategy without changing the context's code."
      },
      {
        type: "fill",
        q: "The class that holds a reference to a strategy and delegates work to it is called the __________.",
        answer: ["context", "context.", "sortingcontext"],
        explain: "In the notes, <code>SortingContext</code> holds a <code>SortingStrategy</code> and calls <code>sort()</code> on it."
      },
      {
        type: "mcq",
        q: "Which method lets <code>SortingContext</code> change its algorithm at runtime?",
        options: [
          "<code>performSort()</code>",
          "<code>setSortingStrategy()</code>",
          "<code>createIterator()</code>",
          "<code>getResult()</code>"
        ],
        answer: 1,
        explain: "The setter swaps the strategy reference. The next <code>performSort()</code> call uses the new algorithm."
      },
      {
        type: "tf",
        q: "Strategy removes the need for a Strategy interface because the context can call concrete classes directly.",
        answer: false,
        explain: "False. The Strategy interface is essential: the context depends on the abstraction, which keeps strategies interchangeable and supports the Open/Closed Principle."
      },
      {
        type: "mcq",
        q: "What is the key difference between Strategy and Decorator?",
        options: [
          "Strategy is creational; Decorator is behavioural.",
          "Strategy swaps the algorithm an object uses; Decorator wraps an object to add behaviour while keeping the same interface.",
          "Decorator can be applied only once; Strategy can be applied many times.",
          "They are the same pattern with different names."
        ],
        answer: 1,
        explain: "Strategy changes the algorithm behind a context. Decorator adds responsibilities by wrapping the object, and the wrapped object remains the same type."
      },
      {
        type: "tf",
        q: "The Strategy pattern can help eliminate large if-else or switch blocks that select behaviour.",
        answer: true,
        explain: "True. Each branch becomes a concrete strategy class, and the client or context selects the appropriate one."
      }
    ]
  },

  "design-patterns": {
    title: "Design Patterns & SOLID",
    note: "Design Patterns.md",
    intro: "Categories, SOLID principles, and inheritance versus composition and aggregation.",
    questions: [
      {
        type: "mcq",
        q: "Which category of Gang of Four patterns does Composite belong to?",
        options: ["Creational", "Structural", "Behavioural", "Architectural"],
        answer: 1,
        explain: "Composite is structural: it composes objects into tree structures."
      },
      {
        type: "mcq",
        q: "Which category contains Iterator and Strategy?",
        options: ["Creational", "Structural", "Behavioural", "Architectural"],
        answer: 2,
        explain: "Both concern how objects interact and behave: Iterator manages traversal, Strategy swaps algorithms."
      },
      {
        type: "fill",
        q: "The Single Responsibility Principle states that a class should have only one reason to __________.",
        answer: ["change", "change."],
        explain: "SRP keeps a class focused on one job. Printing and database logic in an <code>Invoice</code> class would violate it."
      },
      {
        type: "mcq",
        q: "A <code>Square</code> extends <code>Rectangle</code>. Setting the width of a <code>Square</code> also changes its height, so code written for <code>Rectangle</code> gets wrong results. Which principle is violated?",
        options: [
          "Single Responsibility Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle",
          "Dependency Inversion Principle"
        ],
        answer: 1,
        explain: "A subclass must be substitutable for its base class. Here a <code>Square</code> breaks the expectations of code written for <code>Rectangle</code>."
      },
      {
        type: "mcq",
        q: "A <code>Robot</code> implements <code>Worker</code> but must throw <code>UnsupportedOperationException</code> from <code>eat()</code>. Which principle is violated?",
        options: [
          "Open/Closed Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle",
          "Dependency Inversion Principle"
        ],
        answer: 2,
        explain: "The <code>Worker</code> interface forces <code>Robot</code> to depend on a method it does not use. ISP prefers small, client-specific interfaces."
      },
      {
        type: "mcq",
        q: "<code>Notification</code> creates its own <code>EmailService</code> with <code>new EmailService()</code>. Which principle is violated?",
        options: [
          "Dependency Inversion Principle",
          "Single Responsibility Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle"
        ],
        answer: 0,
        explain: "The high-level <code>Notification</code> class depends on a concrete low-level class. DIP says both should depend on an abstraction such as <code>MessageService</code>."
      },
      {
        type: "fill",
        q: "The principle stating that software entities should be open for extension but closed for modification is the __________ principle.",
        answer: ["open/closed", "open closed", "open-closed", "open/closed principle", "ocp"],
        explain: "OCP is why patterns like Strategy and Decorator add new classes instead of editing existing ones."
      },
      {
        type: "mcq",
        q: "Which statement about composition and aggregation is correct?",
        options: [
          "Composition is weak ownership; aggregation is strong ownership.",
          "Composition is strong ownership where the part's lifecycle depends on the whole; aggregation is weak ownership where the part can exist independently.",
          "Both describe an 'is-a' relationship.",
          "Aggregation means the part is created and destroyed with the whole."
        ],
        answer: 1,
        explain: "Composition has strong ownership and part lifecycle is bound to the whole. Aggregation has weak ownership and parts exist independently."
      }
    ]
  },

  "spring-cors": {
    title: "Spring Security: CORS",
    note: "Spring Security - CORS.md",
    intro: "Cross-origin rules, global vs controller configuration, and the browser headers.",
    questions: [
      {
        type: "mcq",
        q: "What is CORS?",
        options: [
          "A database transaction isolation level.",
          "A browser security mechanism that allows or restricts access to resources on another domain, protocol or port.",
          "A Spring Security authentication provider.",
          "A Java annotation for mapping HTTP requests."
        ],
        answer: 1,
        explain: "CORS controls cross-origin requests made from browsers. It is enforced by the browser using response headers such as <code>Access-Control-Allow-Origin</code>."
      },
      {
        type: "fill",
        q: "The HTTP response header that tells the browser which origin is permitted is __________.",
        answer: ["access-control-allow-origin", "access-control-allow-origin:", "Access-Control-Allow-Origin"],
        explain: "The browser checks <code>Access-Control-Allow-Origin</code> against the page's origin before exposing the response to JavaScript."
      },
      {
        type: "mcq",
        q: "Which annotation allows a specific origin to call a controller endpoint?",
        options: ["<code>@CrossOrigin(origins = \"http://localhost:3000\")</code>", "<code>@PermitAll</code>", "<code>@EnableCors</code>", "<code>@AllowOrigin</code>"],
        answer: 0,
        explain: "<code>@CrossOrigin</code> can be placed on a controller or handler method. Here it allows a frontend served from port 3000."
      },
      {
        type: "fill",
        q: "For global CORS configuration, a class implements <code>WebMvcConfigurer</code> and overrides __________ to register mappings.",
        answer: ["addcorsmappings", "addcorsmappings()", "addCorsMappings", "addCorsMappings()"],
        explain: "<code>addCorsMappings(CorsRegistry registry)</code> lets you call <code>registry.addMapping(\"/**\")</code> and set origins and methods for the whole application."
      },
      {
        type: "mcq",
        q: "An Angular app at <code>http://localhost:4200</code> gets a 'blocked by CORS policy' error calling an API at <code>http://localhost:8080</code>. What is the correct fix?",
        options: [
          "Disable the database firewall.",
          "Configure the API to allow the origin <code>http://localhost:4200</code>.",
          "Change the API to return XML instead of JSON.",
          "Move the Angular app to port 8080 and run both on the same port."
        ],
        answer: 1,
        explain: "The API must send the correct CORS response headers for that origin. Moving the frontend to the same origin would sidestep CORS but is not the intended fix."
      },
      {
        type: "tf",
        q: "Global CORS configuration applies the same rules to every endpoint in the application.",
        answer: true,
        explain: "True. Global configuration is centralised. Controller-level <code>@CrossOrigin</code> gives fine-grained control for individual endpoints."
      }
    ]
  },

  "spring-filter-chain": {
    title: "Spring Security: Filter Chain",
    note: "Spring Security - Filter Chain.md",
    intro: "How every request passes through security filters before reaching a controller.",
    questions: [
      {
        type: "mcq",
        q: "What does Spring Security use internally to secure requests?",
        options: [
          "A chain of servlet filters",
          "A single controller advice",
          "A database trigger",
          "A JPA entity listener"
        ],
        answer: 0,
        explain: "Every incoming request passes through a chain of servlet filters, each performing a specific security task."
      },
      {
        type: "fill",
        q: "The order of filters in the chain is important because filters __________ on each other.",
        answer: ["depend", "depend.", "rely", "rely."],
        explain: "For example, authentication must be established before authorization checks can evaluate the user's roles."
      },
      {
        type: "mcq",
        q: "Place the request flow in the correct order.",
        options: [
          "Controller → filter chain → security validation → client response",
          "Client request → filter chain → security validation → controller → response",
          "Client request → controller → filter chain → response",
          "Security validation → controller → filter chain → client request"
        ],
        answer: 1,
        explain: "The request enters the filter chain, filters authenticate and authorise, then the request reaches the Spring MVC controller, which produces the response."
      },
      {
        type: "tf",
        q: "Public endpoints skip the Spring Security filter chain entirely.",
        answer: false,
        explain: "False. All requests pass through the filters. Public endpoints are permitted by an authorisation rule (for example <code>permitAll()</code>), not by bypassing the chain."
      },
      {
        type: "mcq",
        q: "Where does authentication and authorisation happen?",
        options: [
          "In the controller method",
          "In the filters before the request reaches the controller",
          "In the browser only",
          "In the database connection pool"
        ],
        answer: 1,
        explain: "Security validation happens in the filter chain. By the time the controller runs, the request has already been checked."
      },
      {
        type: "tf",
        q: "After successful validation, the request is forwarded to the Spring MVC controller.",
        answer: true,
        explain: "True. The controller then processes the request and returns the response to the client through the chain."
      }
    ]
  }
};
