import type { Exam } from '../types'

export const exams: Record<string, Exam> = {
  a: {
    title: "ADP372S Mock Exam — Variant A",
    minutes: 120,
    sections: [
      {
        name: "Section One: True or False",
        instruction: "Write TRUE or FALSE for each statement.",
        questions: [
          {
            type: "tf",
            q: "The Adapter pattern belongs to the creational design pattern category.",
            answer: false,
            explain: "False. Adapter is structural: it composes objects so incompatible interfaces can work together."
          },
          {
            type: "tf",
            q: "A Singleton class typically has a private constructor and a static method that returns the single instance.",
            answer: true,
            explain: "True. The private constructor blocks external instantiation, and the static factory method provides global access."
          },
          {
            type: "tf",
            q: "Study the code below. It is a valid implementation of the Decorator pattern.",
            code: `interface Report {
    String render();
}

class PlainReport implements Report {
    public String render() { return "Quarterly Report"; }
}

class FooterDecorator implements Report {
    private final Report inner;

    public FooterDecorator(Report inner) { this.inner = inner; }

    public String render() {
        return inner.render() + "\\n-- End of report --";
    }
}`,
            answer: true,
            explain: "True. <code>FooterDecorator</code> implements the same <code>Report</code> interface, holds a reference to another <code>Report</code>, and adds behaviour by delegating."
          },
          {
            type: "tf",
            q: "In the Observer pattern, the subject must know the concrete classes of its observers in order to notify them.",
            answer: false,
            explain: "False. The subject depends only on the <code>Observer</code> interface and calls <code>update()</code>. Observers are loosely coupled."
          },
          {
            type: "tf",
            q: "The Bridge pattern separates an abstraction from its implementation so that both can vary independently.",
            answer: true,
            explain: "True. Bridge uses composition to avoid a permanent inheritance binding between the two dimensions."
          },
          {
            type: "tf",
            q: "Adding <code>@CrossOrigin(origins = \"http://localhost:5173\")</code> to a controller allows a frontend served from that origin to call the controller from a browser.",
            answer: true,
            explain: "True. The annotation sets the CORS response headers that permit that specific origin."
          },
          {
            type: "tf",
            q: "The Liskov Substitution Principle states that a class should have only one reason to change.",
            answer: false,
            explain: "False. 'One reason to change' is the Single Responsibility Principle. LSP is about subclasses being substitutable for their base class."
          },
          {
            type: "tf",
            q: "Study the configuration below. It ensures that every request, including <code>/api/orders/**</code>, must be authenticated.",
            code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/admin/**").hasRole("ADMIN")
            .anyRequest().permitAll())
        .httpBasic(Customizer.withDefaults());

    return http.build();
}`,
            answer: false,
            explain: "False. Only <code>/api/admin/**</code> requires the ADMIN role. <code>anyRequest().permitAll()</code> allows every other request, including <code>/api/orders/**</code>."
          },
          {
            type: "tf",
            q: "The Interface Segregation Principle states that clients should not be forced to depend on methods they do not use.",
            answer: true,
            explain: "True. ISP prefers small, client-specific interfaces over one large general-purpose interface."
          }
        ]
      },
      {
        name: "Section Two: Fill in the Blanks",
        instruction: "Write the missing word(s).",
        questions: [
          {
            type: "fill",
            q: "The __________ pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.",
            answer: ["abstract factory", "abstractfactory", "abstract factory pattern"],
            explain: "Abstract Factory is a 'factory of factories' that keeps products from the same family consistent."
          },
          {
            type: "fill",
            q: "The __________ pattern ensures that a class has only one instance and provides a global point of access to it.",
            answer: ["singleton", "singleton pattern"],
            explain: "Singleton controls instantiation through a private constructor and a static accessor."
          },
          {
            type: "fill",
            q: "The __________ pattern reduces memory usage by sharing intrinsic state among many similar objects, usually through a factory cache.",
            answer: ["flyweight", "flyweight pattern"],
            explain: "Flyweight stores shared (intrinsic) data centrally and accepts unique (extrinsic) data from the client."
          },
          {
            type: "fill",
            q: "The SOLID principle stating that high-level modules should depend on abstractions rather than concrete implementations is the __________ principle.",
            answer: ["dependency inversion", "dependency inversion principle", "dip"],
            explain: "DIP decouples policy from implementation details by introducing abstractions between the two layers."
          },
          {
            type: "fill",
            q: "In the Command pattern, the object that performs the actual operation requested by a command is called the __________.",
            answer: ["receiver", "receiver."],
            explain: "The concrete command holds a receiver and calls its operation inside <code>execute()</code>. The invoker only triggers the command."
          },
          {
            type: "fill",
            q: "In the Iterator pattern, the method that returns <code>true</code> when more elements remain is __________.",
            answer: ["hasnext()", "hasnext", "hasNext()", "hasNext"],
            explain: "<code>hasNext()</code> is checked before <code>next()</code>. Calling <code>next()</code> with no elements left typically throws <code>NoSuchElementException</code>."
          },
          {
            type: "fill",
            q: "In Spring Security, the authorization method used to allow access to a matched URL without authentication is __________.",
            answer: ["permitall()", "permitall", "permitAll()", "permitAll"],
            explain: "<code>permitAll()</code> allows the matched requests. The requests still pass through the filter chain."
          },
          {
            type: "fill",
            q: "The HTTP method commonly used to remove a resource in a RESTful web service is __________.",
            answer: ["delete", "delete."],
            explain: "DELETE removes a resource. GET reads, POST creates, PUT/PATCH update."
          },
          {
            type: "fill",
            q: "Identify the SOLID principle violated by the code below.",
            code: `class Bird {
    void fly() { System.out.println("Flying"); }
}

class Ostrich extends Bird {
    void fly() { throw new UnsupportedOperationException(); }
}`,
            answer: ["liskov substitution", "liskov substitution principle", "lsp"],
            explain: "An <code>Ostrich</code> cannot be used wherever a <code>Bird</code> is expected without breaking the program. That violates LSP."
          },
          {
            type: "fill",
            q: "In JPA, the annotation used to mark the primary key field of an entity is __________.",
            answer: ["@id", "id", "@Id"],
            explain: "<code>@Id</code> marks the identifier property of a JPA entity."
          },
          {
            type: "fill",
            q: "In Spring Boot, the annotation used to map HTTP GET requests to a handler method is __________.",
            answer: ["@getmapping", "getmapping", "@GetMapping"],
            explain: "<code>@GetMapping</code> is a shortcut for <code>@RequestMapping(method = RequestMethod.GET)</code>."
          }
        ]
      },
      {
        name: "Section Three: Multiple Choice",
        instruction: "Choose the ONE correct option (A, B, C or D).",
        questions: [
          {
            type: "mcq",
            q: "A logistics system must create Truck or Ship objects depending on the transport type, without client code calling <code>new Truck()</code> or <code>new Ship()</code>. Which pattern is most appropriate?",
            options: ["Observer", "Factory Method", "Decorator", "Adapter"],
            answer: 1,
            explain: "Factory Method centralises creation behind a method that returns the abstract product type."
          },
          {
            type: "mcq",
            q: "An application needs exactly one <code>ConfigurationManager</code> object shared by all classes. Which pattern should be used?",
            options: ["Singleton", "Strategy", "Builder", "Observer"],
            answer: 0,
            explain: "Singleton guarantees one instance and a global access point."
          },
          {
            type: "mcq",
            q: "A third-party library exposes <code>getTempFahrenheit()</code>, but your system expects a <code>TemperatureSensor</code> interface with <code>getCelsius()</code>. You may not change the library. Which pattern should be used?",
            options: ["Decorator", "Observer", "Adapter", "Singleton"],
            answer: 2,
            explain: "Adapter implements the expected target interface and translates calls to the incompatible adaptee."
          },
          {
            type: "mcq",
            q: "To which category of Gang of Four patterns does the Observer pattern belong?",
            options: ["Creational", "Structural", "Architectural", "Behavioural"],
            answer: 3,
            explain: "Observer is behavioural: it defines how a subject and its observers interact."
          },
          {
            type: "mcq",
            q: "A pizza ordering system lets customers add cheese, olives and mushrooms in any combination at runtime, without a subclass for every combination. Which pattern is most appropriate?",
            options: ["Decorator", "Singleton", "Factory Method", "Observer"],
            answer: 0,
            explain: "Each topping is a decorator that wraps the pizza, adding cost and description dynamically."
          },
          {
            type: "mcq",
            q: "Many <code>Enrolment</code> entities belong to one <code>Student</code>. Which annotation belongs on the <code>student</code> field inside <code>Enrolment</code>?",
            options: ["<code>@OneToMany</code>", "<code>@ManyToOne</code>", "<code>@OneToOne</code>", "<code>@ManyToMany</code>"],
            answer: 1,
            explain: "The many side (<code>Enrolment</code>) holds the foreign key, so it uses <code>@ManyToOne</code>."
          },
          {
            type: "mcq",
            q: "A <code>HeartRateMonitor</code> must send each reading to <code>Display</code>, <code>HistoryLogger</code> and <code>EmergencyAlert</code>, with the components loosely coupled. Which pattern should be implemented?",
            options: ["Strategy", "Adapter", "Builder", "Observer"],
            answer: 3,
            explain: "The monitor is the subject and the three components are observers registered to receive updates."
          },
          {
            type: "mcq",
            q: "Which part of a JSON Web Token is used to verify that the token has not been tampered with?",
            options: ["Header", "Payload", "Signature", "Expiry date"],
            answer: 2,
            explain: "The signature is computed with a secret or private key. A changed payload produces a signature mismatch."
          },
          {
            type: "mcq",
            q: "A <code>Student</code> has many optional fields such as middle name, phone, address and emergency contact. The developer wants to construct it step by step in readable code. Which pattern should be used?",
            options: ["Builder", "Adapter", "Observer", "Strategy"],
            answer: 0,
            explain: "Builder avoids a telescoping constructor and builds the object through chained, readable steps."
          },
          {
            type: "mcq",
            q: "A navigation app calculates routes differently for driving, walking and cycling, and the user switches mode at runtime. Which pattern is most appropriate?",
            options: ["Singleton", "Strategy", "Adapter", "Builder"],
            answer: 1,
            explain: "Each routing algorithm is a concrete strategy, and the context delegates to the selected one."
          },
          {
            type: "mcq",
            q: "Which statement best describes the Dependency Inversion Principle?",
            options: [
              "Classes should always depend directly on concrete classes.",
              "High-level modules should depend on low-level modules.",
              "High-level and low-level modules should both depend on abstractions.",
              "Every class should have several responsibilities."
            ],
            answer: 2,
            explain: "DIP inverts the usual dependency: both layers depend on an abstraction instead of the high-level module creating a concrete low-level object."
          },
          {
            type: "mcq",
            q: "An online shop has <code>Book</code>, <code>Electronics</code> and <code>Food</code> classes. New operations such as tax calculation and XML export must be added without modifying these classes each time. Which pattern fits?",
            options: ["Decorator", "Observer", "Singleton", "Visitor"],
            answer: 3,
            explain: "Visitor adds operations as new visitor classes while the element classes stay unchanged."
          },
          {
            type: "mcq",
            q: "A calculator must evaluate expressions such as <code>3 + 5 * 2</code> according to defined grammar rules. Which pattern is most appropriate?",
            options: ["Builder", "Interpreter", "Observer", "Adapter"],
            answer: 1,
            explain: "Interpreter models grammar rules as classes and evaluates an expression tree."
          },
          {
            type: "mcq",
            q: "A <code>ReportService</code> creates its database connection with <code>new MySqlDatabase()</code> inside its constructor. Switching to PostgreSQL requires editing <code>ReportService</code>. Which principle is violated?",
            options: ["Dependency Inversion Principle", "Interface Segregation Principle", "Liskov Substitution Principle", "Open/Closed Principle"],
            answer: 0,
            explain: "The high-level service depends on a concrete low-level class instead of an abstraction."
          },
          {
            type: "mcq",
            q: "A <code>StudentService</code> validates input, saves students, generates PDF transcripts and sends welcome emails. Which principle is most likely violated?",
            options: ["Open/Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Single Responsibility Principle"],
            answer: 3,
            explain: "The class has several reasons to change because it carries multiple unrelated responsibilities."
          },
          {
            type: "mcq",
            q: "Every time a new discount type is added, a developer edits a long if-else block inside <code>DiscountCalculator</code>. Which principle is being violated?",
            options: ["Single Responsibility Principle", "Liskov Substitution Principle", "Open/Closed Principle", "Interface Segregation Principle"],
            answer: 2,
            explain: "New behaviour should come from new classes (extension), not repeated edits to existing conditional logic."
          },
          {
            type: "mcq",
            q: "An Angular app on <code>http://localhost:4200</code> gets a 'blocked by CORS policy' error calling a Spring Boot API on <code>http://localhost:8080</code>. What is the correct solution?",
            options: [
              "Replace session-based security with JWT.",
              "Configure the API to allow the origin <code>http://localhost:4200</code>.",
              "Allow remote connections in the database settings.",
              "Change the API to return XML instead of JSON."
            ],
            answer: 1,
            explain: "CORS is solved by permitting the requesting origin on the API. JWT does not fix a missing CORS header."
          },
          {
            type: "mcq",
            q: "After login, a REST API returns a JWT. In which HTTP header does the client usually send it on later requests?",
            options: ["<code>Authorization: Bearer &lt;token&gt;</code>", "<code>Content-Type: &lt;token&gt;</code>", "<code>Accept: &lt;token&gt;</code>", "<code>Origin: &lt;token&gt;</code>"],
            answer: 0,
            explain: "The Bearer scheme in the Authorization header is the standard way to transmit a JWT."
          },
          {
            type: "mcq",
            q: "Which type of relationship exists between the subject and its observers?",
            options: [
              "Many-to-one: many subjects notify one observer.",
              "One-to-one: each subject has exactly one observer.",
              "One-to-many: one subject notifies many observers.",
              "Many-to-many through a message broker."
            ],
            answer: 2,
            explain: "One subject maintains a list of observers and pushes updates to all of them."
          },
          {
            type: "mcq",
            q: "Why is the Open-Closed Principle important in the Decorator pattern?",
            options: [
              "Classes should contain switch statements that open and close features.",
              "Decorators must be tightly coupled to the classes they wrap.",
              "A decorator may only be applied once to each object.",
              "New behaviour is added by writing new decorator classes without modifying existing classes."
            ],
            answer: 3,
            explain: "Decorators extend behaviour through new classes, leaving the component and existing decorators closed for modification."
          },
          {
            type: "mcq",
            q: "Which feature is essential when implementing the Singleton pattern in Java?",
            options: [
              "A private constructor and a static method that returns the single instance.",
              "A public constructor that callers use to create new instances.",
              "An abstract method that every subclass must implement.",
              "A list of observers that are notified when the object changes."
            ],
            answer: 0,
            explain: "Private construction plus static access is the defining structure of Singleton."
          },
          {
            type: "mcq",
            q: "Choose the statement that is FALSE about the SOLID principles.",
            options: [
              "SRP states that a class should have only one reason to change.",
              "OCP states that software entities should be open for extension but closed for modification.",
              "DIP states that high-level modules should depend on low-level modules.",
              "ISP prefers small, client-specific interfaces."
            ],
            answer: 2,
            explain: "DIP says both high-level and low-level modules should depend on abstractions, not that high-level depends on low-level."
          },
          {
            type: "mcq",
            q: "A <code>Square</code> extends <code>Rectangle</code>. Setting the width of a <code>Square</code> also changes its height, so code written for <code>Rectangle</code> produces wrong results. Which principle is violated?",
            options: ["Single Responsibility Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Dependency Inversion Principle"],
            answer: 1,
            explain: "The subtype cannot be substituted for the base type without breaking expected behaviour."
          },
          {
            type: "mcq",
            q: "In a Spring Boot REST controller, which annotation binds the <code>id</code> in <code>/api/students/{id}</code> to a method parameter?",
            options: ["<code>@RequestBody</code>", "<code>@RequestParam</code>", "<code>@Entity</code>", "<code>@PathVariable</code>"],
            answer: 3,
            explain: "<code>@PathVariable</code> extracts a value from a URI template variable."
          },
          {
            type: "mcq",
            q: "In the Observer pattern, which method does the subject typically call to inform all registered observers of a change?",
            options: ["<code>notifyObservers()</code>", "<code>attach()</code>", "<code>detach()</code>", "<code>build()</code>"],
            answer: 0,
            explain: "<code>notifyObservers()</code> iterates the observer list and calls <code>update()</code> on each."
          },
          {
            type: "mcq",
            q: "Which statement about the Adapter and Bridge patterns is TRUE?",
            options: [
              "Bridge makes existing incompatible interfaces work together, while Adapter separates abstraction from implementation.",
              "Adapter makes existing incompatible interfaces work together, while Bridge separates abstraction from implementation so both vary independently.",
              "Adapter and Bridge are the same pattern with different names.",
              "Bridge is a creational pattern used to create families of objects."
            ],
            answer: 1,
            explain: "Adapter is about compatibility; Bridge is about independent evolution of abstraction and implementation."
          },
          {
            type: "mcq",
            q: "In a Spring Security configuration, which rule restricts all URLs under <code>/api/admin/</code> to users with the ADMIN role?",
            options: [
              "<code>.requestMatchers(\"/api/admin/**\").permitAll()</code>",
              "<code>.anyRequest().permitAll()</code>",
              "<code>.csrf(csrf -&gt; csrf.disable())</code>",
              "<code>.requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")</code>"
            ],
            answer: 3,
            explain: "<code>hasRole(\"ADMIN\")</code> requires the authenticated user to hold ROLE_ADMIN."
          },
          {
            type: "mcq",
            q: "A coffee is created with <code>new Milk(new Sugar(new Coffee()))</code>, where Milk and Sugar are decorators. When the client calls <code>cost()</code>, whose method runs first?",
            options: [
              "Sugar, because it is the middle object.",
              "Coffee, because it is the original object.",
              "Milk, because it is the outermost decorator.",
              "All three are called at the same time."
            ],
            answer: 2,
            explain: "The outermost decorator receives the call first, adds its cost, and delegates inward."
          },
          {
            type: "mcq",
            q: "What is the key difference between the Strategy and Decorator patterns?",
            options: [
              "Strategy is creational, while Decorator is behavioural.",
              "Strategy swaps the algorithm an object uses, while Decorator wraps an object to add behaviour while keeping the same interface.",
              "Decorator can only be applied once, while Strategy can be applied many times.",
              "There is no difference; they are two names for the same pattern."
            ],
            answer: 1,
            explain: "Strategy changes behaviour by substituting an algorithm. Decorator changes behaviour by layering wrappers around the object."
          },
          {
            type: "mcq",
            q: "In Spring Security 6, which bean replaces extending the removed <code>WebSecurityConfigurerAdapter</code> class?",
            options: ["<code>SecurityFilterChain</code>", "<code>AuthenticationManagerBuilder</code>", "<code>HttpSecurityAdapter</code>", "<code>WebMvcConfigurer</code>"],
            answer: 0,
            explain: "A <code>SecurityFilterChain</code> bean built from <code>HttpSecurity</code> is the modern configuration approach."
          }
        ]
      }
    ]
  },

  b: {
    title: "ADP372S Mock Exam — Variant B",
    minutes: 120,
    sections: [
      {
        name: "Section One: True or False",
        instruction: "Write TRUE or FALSE for each statement.",
        questions: [
          {
            type: "tf",
            q: "The Factory Method pattern is a structural design pattern.",
            answer: false,
            explain: "False. Factory Method is creational: it encapsulates how objects are created."
          },
          {
            type: "tf",
            q: "Every Builder implementation must include a Director class.",
            answer: false,
            explain: "False. The Director is optional. The client can drive the builder steps directly, especially with a fluent builder."
          },
          {
            type: "tf",
            q: "Study the code below. It is a valid implementation of the Composite pattern.",
            code: `import java.util.ArrayList;
import java.util.List;

abstract class UiNode {
    abstract void render();
}

class Label extends UiNode {
    void render() { System.out.println("Label"); }
}

class Panel extends UiNode {
    private List<UiNode> children = new ArrayList<>();

    void add(UiNode child) { children.add(child); }

    void render() {
        for (UiNode child : children) { child.render(); }
    }
}`,
            answer: true,
            explain: "True. <code>Panel</code> is a composite that holds children of the common type, and <code>Label</code> is a leaf. Both share the <code>UiNode</code> interface."
          },
          {
            type: "tf",
            q: "In the Strategy pattern, the context class must be edited every time a new algorithm is selected.",
            answer: false,
            explain: "False. The client supplies a different strategy object through a setter or constructor. The context code stays the same."
          },
          {
            type: "tf",
            q: "The Flyweight pattern separates intrinsic state from extrinsic state in order to save memory.",
            answer: true,
            explain: "True. Shared intrinsic state lives in the flyweight; unique extrinsic state is supplied by the client."
          },
          {
            type: "tf",
            q: "CORS is enforced by the server rather than by the browser.",
            answer: false,
            explain: "False. The browser enforces CORS. The server responds with headers such as <code>Access-Control-Allow-Origin</code> that the browser checks."
          },
          {
            type: "tf",
            q: "The Dependency Inversion Principle states that high-level modules should depend directly on low-level modules.",
            answer: false,
            explain: "False. It states that both high-level and low-level modules should depend on abstractions."
          },
          {
            type: "tf",
            q: "Study the configuration below. Requests to <code>/api/public/**</code> require authentication.",
            code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated())
        .httpBasic(Customizer.withDefaults());

    return http.build();
}`,
            answer: false,
            explain: "False. <code>permitAll()</code> allows <code>/api/public/**</code> without authentication. Everything else requires authentication."
          },
          {
            type: "tf",
            q: "The Open-Closed Principle states that software entities should be open for extension but closed for modification.",
            answer: true,
            explain: "True. New behaviour should be added by extending the design, not by editing stable existing code."
          }
        ]
      },
      {
        name: "Section Two: Fill in the Blanks",
        instruction: "Write the missing word(s).",
        questions: [
          {
            type: "fill",
            q: "The __________ pattern wraps an object to add new behaviour dynamically without changing the object's class.",
            answer: ["decorator", "decorator pattern"],
            explain: "Decorator wraps a component with another object that implements the same interface."
          },
          {
            type: "fill",
            q: "The __________ pattern encapsulates a request as an object, decoupling the sender from the receiver.",
            answer: ["command", "command pattern"],
            explain: "Command turns an action into an object that can be executed, queued, logged or undone."
          },
          {
            type: "fill",
            q: "The __________ pattern provides sequential access to a collection's elements without exposing its internal structure.",
            answer: ["iterator", "iterator pattern"],
            explain: "The iterator encapsulates traversal and keeps track of the current position."
          },
          {
            type: "fill",
            q: "The SOLID principle stating that a class should have only one reason to change is the __________ principle.",
            answer: ["single responsibility", "single responsibility principle", "srp"],
            explain: "SRP keeps each class focused on a single job so changes stay localised."
          },
          {
            type: "fill",
            q: "The __________ pattern represents grammar rules as classes and evaluates expressions using a tree structure.",
            answer: ["interpreter", "interpreter pattern"],
            explain: "Terminal and non-terminal expressions form an abstract syntax tree that is evaluated by <code>interpret()</code>."
          },
          {
            type: "fill",
            q: "The Invoker in the Command pattern triggers a command by calling its __________ method.",
            answer: ["execute()", "execute", "execute()."],
            explain: "<code>RemoteControl.pressButton()</code> calls <code>command.execute()</code> without knowing the receiver."
          },
          {
            type: "fill",
            q: "When a subject's state changes, it calls __________ to update all registered observers.",
            answer: ["notifyobservers()", "notifyobservers", "notifyObservers()", "notifyObservers"],
            explain: "<code>notifyObservers()</code> loops through the observer list and calls each observer's <code>update()</code>."
          },
          {
            type: "fill",
            q: "For global CORS configuration in Spring, a class implements <code>WebMvcConfigurer</code> and overrides __________.",
            answer: ["addcorsmappings", "addcorsmappings()", "addCorsMappings", "addCorsMappings()"],
            explain: "Inside <code>addCorsMappings(CorsRegistry registry)</code> you register mappings, allowed origins and allowed methods."
          },
          {
            type: "fill",
            q: "The HTTP method commonly used to update an existing resource in a RESTful web service is __________.",
            answer: ["put", "put.", "patch"],
            explain: "PUT replaces a resource and PATCH partially updates it. Both are used for updates; POST is normally for creation."
          },
          {
            type: "fill",
            q: "In Spring Boot, the annotation __________ binds the <code>{id}</code> segment of <code>/api/students/{id}</code> to a method parameter.",
            answer: ["@pathvariable", "pathvariable", "@PathVariable"],
            explain: "<code>@PathVariable</code> reads a URI template variable and converts it to the parameter type."
          },
          {
            type: "fill",
            q: "In JPA, the annotation placed on a <code>Student</code> field that holds many <code>Enrolment</code> objects is __________.",
            answer: ["@onetomany", "onetomany", "@OneToMany"],
            explain: "<code>@OneToMany</code> maps the one side of the relationship. <code>Enrolment</code> uses <code>@ManyToOne</code>."
          }
        ]
      },
      {
        name: "Section Three: Multiple Choice",
        instruction: "Choose the ONE correct option (A, B, C or D).",
        questions: [
          {
            type: "mcq",
            q: "A document exporter must produce matching PDF and Word families of fonts, headers and footers, and the client must not know the concrete classes. Which pattern is most appropriate?",
            options: ["Abstract Factory", "Observer", "Iterator", "Decorator"],
            answer: 0,
            explain: "Abstract Factory creates consistent families of related products through abstract interfaces."
          },
          {
            type: "mcq",
            q: "A multiplayer game needs exactly one shared <code>ScoreBoard</code> accessible from every game system. Which pattern should be used?",
            options: ["Builder", "Singleton", "Adapter", "Strategy"],
            answer: 1,
            explain: "Singleton provides one shared instance with a global access point."
          },
          {
            type: "mcq",
            q: "A legacy payment class exposes <code>chargeCents()</code>, but the new system expects a <code>PaymentGateway</code> interface with <code>pay()</code>. The legacy class cannot be changed. Which pattern fits?",
            options: ["Bridge", "Composite", "Adapter", "Factory Method"],
            answer: 2,
            explain: "An adapter implements <code>PaymentGateway</code> and translates <code>pay()</code> into <code>chargeCents()</code>."
          },
          {
            type: "mcq",
            q: "To which category does the Bridge pattern belong?",
            options: ["Creational", "Structural", "Behavioural", "Architectural"],
            answer: 1,
            explain: "Bridge is structural: it composes an abstraction with an implementer."
          },
          {
            type: "mcq",
            q: "A coffee ordering app must add milk, syrup or cream at runtime in any order. Which pattern is most appropriate?",
            options: ["Decorator", "Singleton", "Interpreter", "Iterator"],
            answer: 0,
            explain: "Each extra is a decorator wrapping the coffee, so combinations are composed at runtime."
          },
          {
            type: "mcq",
            q: "A chat room must push each new message to all connected clients without knowing their concrete classes. Which pattern should be used?",
            options: ["Factory Method", "Observer", "Builder", "Adapter"],
            answer: 1,
            explain: "The chat room is the subject; connected clients are observers registered for updates."
          },
          {
            type: "mcq",
            q: "Which part of a JWT makes tampering detectable?",
            options: ["Header", "Payload", "Signature", "Issued-at claim"],
            answer: 2,
            explain: "The signature is verified with a secret or public key. Any change to the header or payload invalidates it."
          },
          {
            type: "mcq",
            q: "An HTTP client lets developers set method, headers, query parameters and body in chained calls before sending. Which pattern does this resemble?",
            options: ["Builder", "Visitor", "Flyweight", "Interpreter"],
            answer: 0,
            explain: "Step-by-step construction with chained methods, ending in a build/send step, is the Builder pattern."
          },
          {
            type: "mcq",
            q: "A route planner can switch between fastest, shortest and scenic algorithms while running. Which pattern is most appropriate?",
            options: ["Singleton", "Strategy", "Adapter", "Composite"],
            answer: 1,
            explain: "Each route algorithm is a strategy, and the context delegates to the selected one."
          },
          {
            type: "mcq",
            q: "A file manager must calculate the total size of folders that contain files and other folders, treating both uniformly. Which pattern fits?",
            options: ["Command", "Observer", "Composite", "Bridge"],
            answer: 2,
            explain: "Files are leaves and folders are composites. Recursive traversal treats both through one component interface."
          },
          {
            type: "mcq",
            q: "A shop has a fixed set of item classes. New operations such as tax calculation and XML export must be added without editing the item classes. Which pattern fits?",
            options: ["Visitor", "Strategy", "Decorator", "Singleton"],
            answer: 0,
            explain: "Visitor puts operations in visitor classes and adds them without modifying the elements."
          },
          {
            type: "mcq",
            q: "A rule engine evaluates boolean expressions built from AND, OR and literal values using a defined grammar. Which pattern is most appropriate?",
            options: ["Builder", "Adapter", "Interpreter", "Observer"],
            answer: 2,
            explain: "The grammar maps naturally to terminal and non-terminal expression classes evaluated as a tree."
          },
          {
            type: "mcq",
            q: "A music app must walk a playlist in order without revealing whether the songs are stored in an array or a linked list. Which pattern should be used?",
            options: ["Iterator", "Decorator", "Command", "Bridge"],
            answer: 0,
            explain: "Iterator hides the underlying collection and exposes only traversal methods."
          },
          {
            type: "mcq",
            q: "An icon-heavy map draws thousands of identical pins at different coordinates. Which pattern reduces memory best?",
            options: ["Builder", "Flyweight", "Strategy", "Visitor"],
            answer: 1,
            explain: "One shared pin object (intrinsic state) is reused while coordinates (extrinsic state) are passed per draw."
          },
          {
            type: "mcq",
            q: "A universal remote stores a button action and calls it later without knowing the device. Which pattern is this?",
            options: ["Command", "Adapter", "Observer", "Composite"],
            answer: 0,
            explain: "The button holds a command object and invokes <code>execute()</code>; the command talks to the receiver."
          },
          {
            type: "mcq",
            q: "In the Interpreter pattern, an expression such as addition that combines two sub-expressions is a:",
            options: ["Terminal expression", "Non-terminal expression", "Concrete flyweight", "Concrete observer"],
            answer: 1,
            explain: "Non-terminal expressions combine child expressions and coordinate their interpretation."
          },
          {
            type: "mcq",
            q: "An <code>Invoice</code> class calculates totals, prints itself and writes itself to a database. Which SOLID principle is most clearly violated?",
            options: ["Single Responsibility Principle", "Open/Closed Principle", "Liskov Substitution Principle", "Dependency Inversion Principle"],
            answer: 0,
            explain: "The class has several unrelated reasons to change: calculation, printing and persistence."
          },
          {
            type: "mcq",
            q: "Adding a new animal type requires editing a growing if-else chain in <code>AnimalFactory</code>. Which principle is being violated?",
            options: ["Open/Closed Principle", "Single Responsibility Principle", "Interface Segregation Principle", "Liskov Substitution Principle"],
            answer: 0,
            explain: "The factory is not closed for modification: every new type forces an edit to existing code."
          },
          {
            type: "mcq",
            q: "A <code>Penguin</code> extends <code>Bird</code>, but <code>Bird.fly()</code> throws <code>UnsupportedOperationException</code> in <code>Penguin</code>. Which principle is violated?",
            options: ["Single Responsibility Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Dependency Inversion Principle"],
            answer: 1,
            explain: "Code written for <code>Bird</code> cannot safely use a <code>Penguin</code>. Substitution breaks the program."
          },
          {
            type: "mcq",
            q: "A fat <code>Machine</code> interface declares <code>print()</code>, <code>scan()</code> and <code>fax()</code>. A simple printer only needs <code>print()</code>. Which principle is violated?",
            options: ["Open/Closed Principle", "Dependency Inversion Principle", "Interface Segregation Principle", "Single Responsibility Principle"],
            answer: 2,
            explain: "Clients are forced to depend on methods they do not use. Split the interface into smaller, focused ones."
          },
          {
            type: "mcq",
            q: "<code>OrderService</code> creates <code>new StripeClient()</code> internally. Which principle does this violate?",
            options: ["Dependency Inversion Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Open/Closed Principle"],
            answer: 0,
            explain: "The service should depend on a payment abstraction injected into it, not instantiate a concrete client."
          },
          {
            type: "mcq",
            q: "Which set contains only creational design patterns?",
            options: [
              "Abstract Factory, Builder, Factory Method, Singleton",
              "Adapter, Bridge, Composite, Decorator",
              "Command, Observer, Strategy, Visitor",
              "Iterator, Interpreter, Flyweight, Proxy"
            ],
            answer: 0,
            explain: "Those four are creational. The second set is structural and the third is behavioural."
          },
          {
            type: "mcq",
            q: "Which set contains only behavioural design patterns?",
            options: [
              "Singleton, Bridge, Composite, Flyweight",
              "Observer, Strategy, Command, Visitor",
              "Factory Method, Builder, Adapter, Decorator",
              "Abstract Factory, Iterator, Interpreter, Bridge"
            ],
            answer: 1,
            explain: "Observer, Strategy, Command and Visitor are behavioural. Iterator and Interpreter are also behavioural."
          },
          {
            type: "mcq",
            q: "A React app on <code>http://localhost:3000</code> cannot call a Spring Boot API on <code>http://localhost:8080</code>. What is the correct fix?",
            options: [
              "Allow <code>http://localhost:3000</code> as an origin on the API.",
              "Encrypt the JSON response.",
              "Disable the database.",
              "Change the React app's CSS."
            ],
            answer: 0,
            explain: "The API must permit the browser origin through CORS configuration. The port number is part of the origin."
          },
          {
            type: "mcq",
            q: "How is a JWT normally transmitted on an authenticated request?",
            options: [
              "<code>Authorization: Bearer &lt;token&gt;</code>",
              "<code>Accept: &lt;token&gt;</code>",
              "<code>Origin: &lt;token&gt;</code>",
              "<code>Cookie: token=&lt;password&gt;</code>"
            ],
            answer: 0,
            explain: "The Bearer scheme in the Authorization header carries the token."
          },
          {
            type: "mcq",
            q: "Which annotation maps an HTTP POST request to a handler method?",
            options: ["<code>@GetMapping</code>", "<code>@PostMapping</code>", "<code>@RequestMapping</code>", "<code>@PathVariable</code>"],
            answer: 1,
            explain: "<code>@PostMapping</code> is the shortcut for POST. <code>@RequestMapping</code> is generic and would need the method specified."
          },
          {
            type: "mcq",
            q: "Which annotation extracts the <code>id</code> from <code>/api/students/{id}</code>?",
            options: ["<code>@RequestBody</code>", "<code>@RequestParam</code>", "<code>@PathVariable</code>", "<code>@ModelAttribute</code>"],
            answer: 2,
            explain: "<code>@PathVariable</code> reads a URI template variable. <code>@RequestParam</code> reads query-string parameters."
          },
          {
            type: "mcq",
            q: "In Spring Security 6, which bean type configures authorization rules and replaces <code>WebSecurityConfigurerAdapter</code>?",
            options: ["<code>SecurityFilterChain</code>", "<code>WebMvcConfigurer</code>", "<code>AuthenticationManagerBuilder</code>", "<code>UserDetailsAdapter</code>"],
            answer: 0,
            explain: "A <code>SecurityFilterChain</code> bean built from <code>HttpSecurity</code> is the current approach."
          },
          {
            type: "mcq",
            q: "In the Spring Security request flow, when does security validation happen?",
            options: [
              "After the controller returns its response.",
              "Inside the controller method only.",
              "In the filter chain before the request reaches the controller.",
              "In the browser before the request is sent."
            ],
            answer: 2,
            explain: "Filters authenticate and authorize before the request is forwarded to Spring MVC."
          },
          {
            type: "mcq",
            q: "Which statement is FALSE?",
            options: [
              "The Adapter pattern is structural.",
              "The Observer pattern is behavioural.",
              "The Singleton pattern is creational.",
              "The Bridge pattern is creational."
            ],
            answer: 3,
            explain: "Bridge is structural, not creational. It separates abstraction from implementation."
          }
        ]
      }
    ]
  },

  c: {
    title: "ADP372S Mock Exam — Variant C",
    minutes: 120,
    sections: [
      {
        name: "Section One: True or False",
        instruction: "Write TRUE or FALSE for each statement.",
        questions: [
          {
            type: "tf",
            q: "The Observer pattern is a creational design pattern.",
            answer: false,
            explain: "False. Observer is behavioural: it manages interaction and notification between objects."
          },
          {
            type: "tf",
            q: "A factory method can return <code>null</code> or throw an exception for an unknown type instead of exposing concrete classes to the client.",
            answer: true,
            explain: "True. The factory owns the decision. The notes' <code>getAnimal()</code> returns <code>null</code> for unknown values."
          },
          {
            type: "tf",
            q: "Study the code below. It is a valid Singleton implementation.",
            code: `class AppConfig {
    private static AppConfig instance;

    public AppConfig() { }

    public static AppConfig getInstance() {
        if (instance == null) {
            instance = new AppConfig();
        }
        return instance;
    }
}`,
            answer: false,
            explain: "False. The constructor is public, so any caller can create extra instances with <code>new AppConfig()</code>. It must be private."
          },
          {
            type: "tf",
            q: "A decorator must implement the same interface as the component it wraps.",
            answer: true,
            explain: "True. Sharing the interface is what lets a decorated object be used anywhere the original component is expected."
          },
          {
            type: "tf",
            q: "The Composite pattern lets clients treat individual objects and groups of objects uniformly.",
            answer: true,
            explain: "True. Leaves and composites implement the same component interface."
          },
          {
            type: "tf",
            q: "In Spring, <code>@CrossOrigin</code> can only be applied at class level, never on an individual handler method.",
            answer: false,
            explain: "False. It can be placed on a controller class or on a specific method for fine-grained control."
          },
          {
            type: "tf",
            q: "The Single Responsibility Principle states that a class should have only one reason to change.",
            answer: true,
            explain: "True. One focused responsibility keeps changes contained."
          },
          {
            type: "tf",
            q: "In the Spring Security filter chain, filters run after the controller has processed the request.",
            answer: false,
            explain: "False. Filters run before the request reaches the controller. Security validation must happen first."
          },
          {
            type: "tf",
            q: "The Strategy pattern allows algorithms to vary independently from the client that uses them.",
            answer: true,
            explain: "True. The client selects a strategy, and the context delegates to it without hard-coded algorithm logic."
          }
        ]
      },
      {
        name: "Section Two: Fill in the Blanks",
        instruction: "Write the missing word(s).",
        questions: [
          {
            type: "fill",
            q: "The __________ pattern provides an interface for creating families of related objects without naming their concrete classes.",
            answer: ["abstract factory", "abstractfactory", "abstract factory pattern"],
            explain: "Abstract Factory coordinates a family of related products through abstract interfaces."
          },
          {
            type: "fill",
            q: "The __________ pattern separates an abstraction from its implementation so that both can vary independently.",
            answer: ["bridge", "bridge pattern"],
            explain: "Bridge uses composition to keep the two dimensions independent."
          },
          {
            type: "fill",
            q: "The __________ pattern reduces memory use by sharing intrinsic state and storing objects in a factory cache.",
            answer: ["flyweight", "flyweight pattern"],
            explain: "The flyweight factory returns an existing object when the key is already cached."
          },
          {
            type: "fill",
            q: "The SOLID principle stating that objects of a subclass must be able to replace objects of the superclass without breaking the program is the __________ principle.",
            answer: ["liskov substitution", "liskov substitution principle", "lsp"],
            explain: "LSP protects the expectations of code written against the base type."
          },
          {
            type: "fill",
            q: "The __________ pattern encapsulates a request as an object and decouples the invoker from the receiver.",
            answer: ["command", "command pattern"],
            explain: "Command objects can be stored, queued, logged or undone."
          },
          {
            type: "fill",
            q: "In the Observer pattern, the method that concrete observers must implement to receive updates is __________.",
            answer: ["update()", "update", "update()."],
            explain: "The subject calls <code>update(weather)</code> on each registered observer."
          },
          {
            type: "fill",
            q: "In the Iterator pattern, the method that returns the next element and advances the position is __________.",
            answer: ["next()", "next", "next()."],
            explain: "<code>next()</code> advances the iterator. Callers usually check <code>hasNext()</code> first."
          },
          {
            type: "fill",
            q: "In Spring Security, the authorization method that restricts a matched URL to users with a given role is __________.",
            answer: ["hasrole()", "hasrole", "hasRole()", "hasRole"],
            explain: "<code>hasRole(\"ADMIN\")</code> requires ROLE_ADMIN. <code>permitAll()</code> would allow everyone."
          },
          {
            type: "fill",
            q: "The HTTP method commonly used to read a resource in a RESTful web service is __________.",
            answer: ["get", "get."],
            explain: "GET retrieves a representation of a resource without modifying it."
          },
          {
            type: "fill",
            q: "In Spring Boot, the annotation used to map HTTP GET requests to a handler method is __________.",
            answer: ["@getmapping", "getmapping", "@GetMapping"],
            explain: "<code>@GetMapping</code> maps GET requests to the annotated handler."
          },
          {
            type: "fill",
            q: "In JPA, the annotation used to mark the primary key field of an entity is __________.",
            answer: ["@id", "id", "@Id"],
            explain: "<code>@Id</code> identifies the primary key property of an entity."
          }
        ]
      },
      {
        name: "Section Three: Multiple Choice",
        instruction: "Choose the ONE correct option (A, B, C or D).",
        questions: [
          {
            type: "mcq",
            q: "A cross-platform app needs Windows and macOS families of buttons, checkboxes and menus that always match. Client code must not name concrete classes. Which pattern fits?",
            options: ["Abstract Factory", "Decorator", "Observer", "Iterator"],
            answer: 0,
            explain: "Each platform is a concrete factory producing a consistent family of UI products."
          },
          {
            type: "mcq",
            q: "A <code>Student</code> object has required fields plus many optional fields, and the team wants chained setters and a final <code>build()</code> call. Which pattern is this?",
            options: ["Builder", "Prototype", "Adapter", "Singleton"],
            answer: 0,
            explain: "Fluent setters returning <code>this</code> plus a final <code>build()</code> is the Builder pattern."
          },
          {
            type: "mcq",
            q: "A logging framework must share one logger configuration across the whole application. Which pattern should be used?",
            options: ["Singleton", "Strategy", "Visitor", "Bridge"],
            answer: 0,
            explain: "A single shared logger instance is a classic Singleton use case."
          },
          {
            type: "mcq",
            q: "An old CSV reader exposes <code>readCsv()</code>, but the system expects a <code>DataParser</code> with <code>parse()</code>. The old class cannot change. Which pattern applies?",
            options: ["Adapter", "Composite", "Observer", "Builder"],
            answer: 0,
            explain: "An adapter implements <code>DataParser</code> and delegates <code>parse()</code> to <code>readCsv()</code>."
          },
          {
            type: "mcq",
            q: "A drawing tool has shapes and colours as two dimensions. New shapes and new colours should be added independently. Which pattern fits?",
            options: ["Bridge", "Decorator", "Singleton", "Command"],
            answer: 0,
            explain: "Bridge separates the shape abstraction from the colour implementation so both can grow independently."
          },
          {
            type: "mcq",
            q: "A folder structure contains files and nested folders, and the total size must be computed recursively and uniformly. Which pattern is most appropriate?",
            options: ["Composite", "Adapter", "Strategy", "Flyweight"],
            answer: 0,
            explain: "Folders are composites, files are leaves, and both share the component interface."
          },
          {
            type: "mcq",
            q: "A <code>FileInputStream</code> is wrapped with <code>BufferedInputStream</code> and then <code>DataInputStream</code> to add behaviour. Which pattern does this demonstrate?",
            options: ["Decorator", "Factory Method", "Bridge", "Visitor"],
            answer: 0,
            explain: "Java I/O streams are the canonical Decorator example: wrappers add behaviour while keeping the stream interface."
          },
          {
            type: "mcq",
            q: "A text editor renders thousands of characters that share font, size and style, with only position differing. Which pattern reduces memory?",
            options: ["Flyweight", "Builder", "Observer", "Interpreter"],
            answer: 0,
            explain: "Shared glyph data is intrinsic; position is extrinsic and supplied per character."
          },
          {
            type: "mcq",
            q: "A drawing editor stores every action so the user can undo and redo. Which pattern best supports this?",
            options: ["Command", "Adapter", "Composite", "Singleton"],
            answer: 0,
            explain: "Each action is a command object with an <code>execute()</code> (and undo) operation that can be stored in history."
          },
          {
            type: "mcq",
            q: "A report tool must export shapes to SVG, PDF and PNG without modifying the shape classes each time. Which pattern is most appropriate?",
            options: ["Visitor", "Decorator", "Strategy", "Bridge"],
            answer: 0,
            explain: "Each export format is a visitor, so new operations do not change the element classes."
          },
          {
            type: "mcq",
            q: "A calculator evaluates expressions such as <code>(2 + 3) * 4</code> using classes for numbers and operators. Which pattern is this?",
            options: ["Interpreter", "Builder", "Observer", "Adapter"],
            answer: 0,
            explain: "The expression classes form an AST that is evaluated recursively."
          },
          {
            type: "mcq",
            q: "A stock ticker must push price changes to many dashboards simultaneously without knowing their concrete types. Which pattern should be used?",
            options: ["Observer", "Singleton", "Factory Method", "Composite"],
            answer: 0,
            explain: "The ticker is the subject and each dashboard is an observer."
          },
          {
            type: "mcq",
            q: "A playlist must be traversed in order without revealing whether songs are stored in an array or a linked list. Which pattern fits?",
            options: ["Iterator", "Visitor", "Command", "Decorator"],
            answer: 0,
            explain: "Iterator exposes traversal without exposing the underlying collection."
          },
          {
            type: "mcq",
            q: "A checkout supports credit card, PayPal and crypto, selectable at runtime. Which pattern is most appropriate?",
            options: ["Strategy", "Singleton", "Bridge", "Composite"],
            answer: 0,
            explain: "Each payment method is a strategy, and the checkout context delegates to the chosen one."
          },
          {
            type: "mcq",
            q: "Which of these is a structural design pattern?",
            options: ["Singleton", "Observer", "Composite", "Factory Method"],
            answer: 2,
            explain: "Composite is structural. Singleton and Factory Method are creational; Observer is behavioural."
          },
          {
            type: "mcq",
            q: "Which of these is a behavioural design pattern?",
            options: ["Command", "Bridge", "Builder", "Abstract Factory"],
            answer: 0,
            explain: "Command is behavioural. Bridge is structural; Builder and Abstract Factory are creational."
          },
          {
            type: "mcq",
            q: "A class validates input, persists orders, generates invoices and sends emails. Which SOLID principle is most clearly violated?",
            options: ["Single Responsibility Principle", "Open/Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle"],
            answer: 0,
            explain: "Four unrelated responsibilities give the class four reasons to change."
          },
          {
            type: "mcq",
            q: "Each new report type requires editing a large switch statement in <code>ReportGenerator</code>. Which principle is violated?",
            options: ["Open/Closed Principle", "Single Responsibility Principle", "Interface Segregation Principle", "Liskov Substitution Principle"],
            answer: 0,
            explain: "The class is not closed for modification; new report types should be new classes."
          },
          {
            type: "mcq",
            q: "A <code>MobilePhone</code> implements <code>Camera</code> by throwing <code>UnsupportedOperationException</code> from <code>zoom()</code> because it has no zoom. Which principle is most directly violated?",
            options: ["Liskov Substitution Principle", "Open/Closed Principle", "Dependency Inversion Principle", "Single Responsibility Principle"],
            answer: 0,
            explain: "Substituting the object where a working <code>Camera</code> is expected breaks the program."
          },
          {
            type: "mcq",
            q: "An interface declares ten methods but most implementers use only two. Which principle is violated?",
            options: ["Interface Segregation Principle", "Liskov Substitution Principle", "Dependency Inversion Principle", "Open/Closed Principle"],
            answer: 0,
            explain: "Clients are forced to depend on methods they do not use. Split the interface."
          },
          {
            type: "mcq",
            q: "A service directly instantiates <code>new MySqlDatabase()</code> in its constructor. Which SOLID principle is violated?",
            options: ["Dependency Inversion Principle", "Single Responsibility Principle", "Liskov Substitution Principle", "Interface Segregation Principle"],
            answer: 0,
            explain: "The service depends on a concrete low-level class instead of a database abstraction."
          },
          {
            type: "mcq",
            q: "Which response header tells the browser that a cross-origin request is allowed?",
            options: ["<code>Access-Control-Allow-Origin</code>", "<code>Content-Type</code>", "<code>Authorization</code>", "<code>Location</code>"],
            answer: 0,
            explain: "The browser checks this header against the page's origin before exposing the response."
          },
          {
            type: "mcq",
            q: "Which method registers global CORS mappings in a <code>WebMvcConfigurer</code> class?",
            options: ["<code>addCorsMappings()</code>", "<code>configureCors()</code>", "<code>enableCrossOrigin()</code>", "<code>addInterceptors()</code>"],
            answer: 0,
            explain: "<code>addCorsMappings(CorsRegistry registry)</code> lets you configure paths, origins and methods globally."
          },
          {
            type: "mcq",
            q: "A Vue app on <code>http://localhost:5173</code> is blocked calling an API on <code>http://localhost:8080</code>. What is the correct fix?",
            options: [
              "Allow <code>http://localhost:5173</code> as an origin on the API.",
              "Change the API response to text.",
              "Disable authentication on the API.",
              "Move the database to the same server as the frontend."
            ],
            answer: 0,
            explain: "Permit the frontend origin through CORS on the API. Disabling authentication is unrelated and unsafe."
          },
          {
            type: "mcq",
            q: "Which JWT part is verified to detect a modified payload?",
            options: ["Header", "Payload", "Signature", "Expiry claim"],
            answer: 2,
            explain: "The signature is recalculated using the header and payload. A mismatch means tampering."
          },
          {
            type: "mcq",
            q: "How should a client send a JWT on an authenticated REST request?",
            options: [
              "<code>Authorization: Bearer &lt;token&gt;</code>",
              "<code>Content-Type: &lt;token&gt;</code>",
              "<code>Origin: &lt;token&gt;</code>",
              "<code>Accept: application/jwt</code>"
            ],
            answer: 0,
            explain: "The Authorization header with the Bearer scheme is the standard."
          },
          {
            type: "mcq",
            q: "Which annotation binds the body of a POST request to a method parameter?",
            options: ["<code>@RequestBody</code>", "<code>@PathVariable</code>", "<code>@RequestParam</code>", "<code>@Controller</code>"],
            answer: 0,
            explain: "<code>@RequestBody</code> deserialises the request body, typically JSON, into the parameter."
          },
          {
            type: "mcq",
            q: "Which annotation binds a query-string value such as <code>/search?name=Ann</code> to a parameter?",
            options: ["<code>@PathVariable</code>", "<code>@RequestParam</code>", "<code>@RequestBody</code>", "<code>@Entity</code>"],
            answer: 1,
            explain: "<code>@RequestParam</code> reads query parameters. <code>@PathVariable</code> reads URI template segments."
          },
          {
            type: "mcq",
            q: "Which Spring Security bean is the modern replacement for <code>WebSecurityConfigurerAdapter</code>?",
            options: ["<code>SecurityFilterChain</code>", "<code>WebMvcConfigurer</code>", "<code>CorsRegistry</code>", "<code>UserDetails</code>"],
            answer: 0,
            explain: "Configure a <code>SecurityFilterChain</code> bean using <code>HttpSecurity</code>."
          },
          {
            type: "mcq",
            q: "Which sequence correctly describes request processing in Spring Security?",
            options: [
              "Controller → filter chain → response → client",
              "Client → filter chain → security validation → controller → response",
              "Client → database → controller → filter chain → response",
              "Security validation → client → filter chain → controller"
            ],
            answer: 1,
            explain: "Requests enter the filter chain first. Only after authentication and authorization reach the controller."
          }
        ]
      }
    ]
  },
  original: {
    title: "ADP372S Mock Exam — Original Paper",
    minutes: 120,
    sections: [
      {
        name: "Section One: True or False",
        instruction: "Write TRUE or FALSE for each statement.",
        questions: [
          {
            type: "tf",
            q: "In the Factory Method pattern, the client code creates concrete objects directly by using the <code>new</code> keyword.",
            answer: false,
            explain: "False. The client depends on the creator and its factory method. Concrete creators decide which class to instantiate, so the client never calls <code>new</code> on the product."
          },
          {
            type: "tf",
            q: "The Adapter pattern belongs to the creational design pattern category.",
            answer: false,
            explain: "False. Adapter is structural: it lets incompatible interfaces work together by wrapping an object."
          },
          {
            type: "tf",
            q: "Study the code below carefully. The code is a valid implementation of the Decorator design pattern.",
            code: `public interface Notifier {
    void send(String msg);
}

public class EmailNotifier implements Notifier {
    public void send(String msg) {
        System.out.println("Email: " + msg);
    }
}

public class SmsDecorator implements Notifier {
    private final Notifier wrapped;

    public SmsDecorator(Notifier wrapped) {
        this.wrapped = wrapped;
    }

    public void send(String msg) {
        wrapped.send(msg);
        System.out.println("SMS: " + msg);
    }
}`,
            answer: true,
            explain: "True. <code>SmsDecorator</code> implements the same <code>Notifier</code> interface, holds another <code>Notifier</code>, delegates the call and then adds SMS behaviour."
          },
          {
            type: "tf",
            q: "In the Observer pattern, each observer must know about every other observer so that they can all be updated together.",
            answer: false,
            explain: "False. Observers do not know each other. The subject keeps a list of observers and notifies them through the common interface."
          },
          {
            type: "tf",
            q: "The Bridge pattern separates an abstraction from its implementation so that the two can vary independently.",
            answer: true,
            explain: "True. Bridge replaces a permanent inheritance link with composition, so both sides can change on their own."
          },
          {
            type: "tf",
            q: "Adding the annotation <code>@CrossOrigin(origins = \"http://localhost:3000\")</code> to a Spring Boot controller allows a React application running on <code>http://localhost:3000</code> to call that controller's endpoints from the browser.",
            answer: true,
            explain: "True. <code>@CrossOrigin</code> adds the CORS response headers that permit requests from that origin."
          },
          {
            type: "tf",
            q: "The Liskov Substitution Principle states that a class should have only one reason to change.",
            answer: false,
            explain: "False. 'One reason to change' is the Single Responsibility Principle. LSP says subclasses must be usable wherever the superclass is expected."
          },
          {
            type: "tf",
            q: "Study the Spring Security configuration below. The configuration ensures that every request, including requests to <code>/api/public/**</code>, must be authenticated.",
            code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated())
        .httpBasic(Customizer.withDefaults());

    return http.build();
}`,
            answer: false,
            explain: "False. <code>/api/public/**</code> is explicitly <code>permitAll()</code>. Only requests that do not match it fall through to <code>anyRequest().authenticated()</code>."
          },
          {
            type: "tf",
            q: "The Interface Segregation Principle states that clients should not be forced to depend on methods they do not use.",
            answer: true,
            explain: "True. ISP prefers several small, client-specific interfaces over one large general-purpose interface."
          }
        ]
      },
      {
        name: "Section Two: Fill in the Blanks",
        instruction: "Write the missing word(s).",
        questions: [
          {
            type: "fill",
            q: "The __________ pattern ensures that a class has only one instance and provides a global point of access to it.",
            answer: ["singleton", "singleton pattern"],
            explain: "Singleton hides the constructor and exposes a static method that returns the single instance."
          },
          {
            type: "fill",
            q: "The __________ pattern encapsulates each algorithm in its own class, so that the algorithm can be selected at runtime.",
            answer: ["strategy", "strategy pattern"],
            explain: "Strategy puts each algorithm behind a common interface so the client can swap implementations at runtime."
          },
          {
            type: "fill",
            q: "The __________ pattern wraps an object to add new behaviour dynamically, without changing the object's class.",
            answer: ["decorator", "decorator pattern"],
            explain: "Decorator implements the same interface as the object it wraps and adds behaviour before or after delegating."
          },
          {
            type: "fill",
            q: "The SOLID principle stating that objects of a subclass must be able to replace objects of their superclass without breaking the program is the __________ principle.",
            answer: ["liskov substitution", "liskov substitution principle", "lsp"],
            explain: "Liskov Substitution (LSP) requires subclasses to honour the contract of their superclass."
          },
          {
            type: "fill",
            q: "The SOLID principle stating that software entities should be open for extension but closed for modification is the __________ principle.",
            answer: ["open-closed", "open closed", "open-closed principle", "open closed principle", "ocp"],
            explain: "The Open-Closed Principle (OCP) adds behaviour through new code, not by editing tested code."
          },
          {
            type: "fill",
            q: "In the Observer pattern, the objects that receive updates when the subject changes are called __________.",
            answer: ["observers", "observer"],
            explain: "Observers register with the subject and receive a notification whenever the subject's state changes."
          },
          {
            type: "fill",
            q: "In JPA, the annotation used to mark the primary key field of an entity is __________.",
            answer: ["@id", "id"],
            explain: "<code>@Id</code> marks the field that maps to the table's primary key."
          },
          {
            type: "fill",
            q: "In Spring Security, the method used to allow access to a matched URL without authentication is __________.",
            answer: ["permitall", "permitall()", "permit all"],
            explain: "<code>permitAll()</code> lets a matched request through without authentication."
          },
          {
            type: "fill",
            q: "Identify the SOLID principle violated in the code snippet below.",
            code: `public interface Worker {
    void work();
    void eat();
}

public class Robot implements Worker {
    public void work() {
        System.out.println("Assembling parts");
    }

    public void eat() {
        throw new UnsupportedOperationException();
    }
}`,
            answer: ["interface segregation", "interface segregation principle", "isp"],
            explain: "Interface Segregation (ISP) is violated. <code>Robot</code> is forced to implement <code>eat()</code>, a method it does not use."
          },
          {
            type: "fill",
            q: "In Spring Boot, the annotation __________ is used to map HTTP GET requests to a handler method.",
            answer: ["@getmapping", "getmapping"],
            explain: "<code>@GetMapping</code> is the shortcut for <code>@RequestMapping(method = RequestMethod.GET)</code>."
          },
          {
            type: "fill",
            q: "The HTTP method __________ is commonly used to remove a resource in a RESTful web service.",
            answer: ["delete", "http delete"],
            explain: "DELETE is the HTTP method for removing the resource identified by the URL."
          }
        ]
      },
      {
        name: "Section Three: Multiple Choice",
        instruction: "Choose the ONE correct option (A, B, C or D).",
        questions: [
          {
            type: "mcq",
            q: "A logistics application must create Truck or Ship objects depending on the transport type, without the client code calling <code>new Truck()</code> or <code>new Ship()</code> directly. Which design pattern is most appropriate?",
            options: ["Observer", "Factory Method", "Decorator", "Adapter"],
            answer: 1,
            explain: "Factory Method moves object creation behind a factory method, so the client works with the product interface instead of concrete constructors."
          },
          {
            type: "mcq",
            q: "An application needs exactly one ConfigurationManager object that is shared by all classes in the system. Which design pattern should be used?",
            options: ["Singleton", "Strategy", "Builder", "Observer"],
            answer: 0,
            explain: "Singleton guarantees one instance and provides a global access point to it."
          },
          {
            type: "mcq",
            q: "A third-party library provides temperatures through a method called <code>getTempFahrenheit()</code>, but your system expects a <code>TemperatureSensor</code> interface with a method <code>getCelsius()</code>. You may not change the library. Which pattern should be used?",
            options: ["Decorator", "Observer", "Adapter", "Singleton"],
            answer: 2,
            explain: "Adapter wraps the incompatible library class and exposes the interface your system expects."
          },
          {
            type: "mcq",
            q: "To which category of Gang of Four design patterns does the Observer pattern belong?",
            options: ["Creational", "Structural", "Architectural", "Behavioural"],
            answer: 3,
            explain: "Observer is behavioural: it defines how objects communicate when state changes."
          },
          {
            type: "mcq",
            q: "A pizza ordering system lets customers add toppings such as cheese, olives and mushrooms in any combination at runtime, without creating a subclass for every combination. Which pattern is most appropriate?",
            options: ["Decorator", "Singleton", "Factory Method", "Observer"],
            answer: 0,
            explain: "Decorator stacks toppings dynamically by wrapping the base pizza object."
          },
          {
            type: "mcq",
            q: "In a JPA application, many Enrolment entities belong to one Student. Which annotation should be placed on the student field inside the Enrolment class?",
            options: ["<code>@OneToMany</code>", "<code>@ManyToOne</code>", "<code>@OneToOne</code>", "<code>@ManyToMany</code>"],
            answer: 1,
            explain: "Many enrolments map to one student, so the field in <code>Enrolment</code> is <code>@ManyToOne</code>."
          },
          {
            type: "mcq",
            q: "A fitness app has a <code>HeartRateMonitor</code> class that receives readings from a sensor. It must send each reading to three components: <code>Display</code> to <code>show()</code> the reading, <code>HistoryLogger</code> to <code>save()</code> it, and <code>EmergencyAlert</code> to <code>warn()</code> if the heart rate is dangerous. The components must be loosely coupled. Which pattern should be implemented?",
            options: ["Strategy", "Adapter", "Builder", "Observer"],
            answer: 3,
            explain: "Observer lets the monitor publish readings to registered subscribers without knowing their concrete classes."
          },
          {
            type: "mcq",
            q: "Which part of a JSON Web Token (JWT) is used to verify that the token has not been tampered with?",
            options: ["Header", "Payload", "Signature", "Expiry date"],
            answer: 2,
            explain: "The signature is verified with the secret or key. Any change to the header or payload invalidates it."
          },
          {
            type: "mcq",
            q: "A Student class has many optional fields, such as a middle name, phone number, address and emergency contact. The developer wants to create Student objects step by step in readable code. Which pattern should be used?",
            options: ["Builder", "Adapter", "Observer", "Strategy"],
            answer: 0,
            explain: "Builder constructs a complex object step by step and avoids a constructor with many optional parameters."
          },
          {
            type: "mcq",
            q: "A navigation app calculates routes differently for driving, walking and cycling. The user can switch between these modes while the app is running. Which pattern is most appropriate?",
            options: ["Singleton", "Strategy", "Adapter", "Builder"],
            answer: 1,
            explain: "Strategy encapsulates each route algorithm behind a common interface and lets the app switch at runtime."
          },
          {
            type: "mcq",
            q: "Which statement best describes the Dependency Inversion Principle?",
            options: [
              "Classes should always depend directly on concrete classes.",
              "High-level modules should depend on low-level modules.",
              "High-level and low-level modules should both depend on abstractions.",
              "Every class should have several responsibilities."
            ],
            answer: 2,
            explain: "DIP says both high-level policy and low-level details should depend on abstractions, not on each other."
          },
          {
            type: "mcq",
            q: "An online shop has Book, Electronics and Food classes. The developers need to add new operations, such as calculating tax and exporting to XML, across all these classes without modifying the classes each time. Which pattern is most appropriate?",
            options: ["Decorator", "Observer", "Singleton", "Visitor"],
            answer: 3,
            explain: "Visitor adds operations to an object structure without editing the element classes."
          },
          {
            type: "mcq",
            q: "A calculator application must read and evaluate expressions such as <code>3 + 5 * 2</code> according to a defined set of grammar rules. Which design pattern is most appropriate?",
            options: ["Builder", "Interpreter", "Observer", "Adapter"],
            answer: 1,
            explain: "Interpreter represents grammar rules as classes and evaluates sentences built from them."
          },
          {
            type: "mcq",
            q: "A <code>ReportService</code> class creates its database connection with <code>new MySqlDatabase()</code> inside its constructor. To switch to PostgreSQL, a developer has to edit <code>ReportService</code>. Which SOLID principle is violated?",
            options: ["Dependency Inversion Principle", "Interface Segregation Principle", "Liskov Substitution Principle", "Open-Closed Principle"],
            answer: 0,
            explain: "DIP is violated: the class depends on a concrete database instead of an abstraction."
          },
          {
            type: "mcq",
            q: "A <code>StudentService</code> class validates input, saves students to the database, generates PDF transcripts and sends welcome emails. Which SOLID principle is most likely violated?",
            options: ["Open-Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Single Responsibility Principle"],
            answer: 3,
            explain: "SRP is violated: the class has several unrelated reasons to change."
          },
          {
            type: "mcq",
            q: "Every time a new discount type is added, a developer edits a long if-else block inside the <code>DiscountCalculator</code> class. Which SOLID principle is being violated?",
            options: ["Single Responsibility Principle", "Liskov Substitution Principle", "Open-Closed Principle", "Interface Segregation Principle"],
            answer: 2,
            explain: "OCP is violated: adding a discount should not require modifying existing code."
          },
          {
            type: "mcq",
            q: "An Angular application running on <code>http://localhost:4200</code> receives a 'blocked by CORS policy' error when calling a Spring Boot API on <code>http://localhost:8080</code>. What is the correct solution?",
            options: [
              "Replace session-based security with JWT.",
              "Configure the API to allow the origin <code>http://localhost:4200</code>.",
              "Allow remote connections in the database settings.",
              "Change the API to return XML instead of JSON."
            ],
            answer: 1,
            explain: "CORS is controlled by the server. The API must allow that origin, for example with <code>@CrossOrigin</code> or a CORS configuration."
          },
          {
            type: "mcq",
            q: "After a successful login, a REST API returns a JWT to the client. In which HTTP header does the client usually send the token with later requests?",
            options: ["<code>Authorization: Bearer &lt;token&gt;</code>", "<code>Content-Type: &lt;token&gt;</code>", "<code>Accept: &lt;token&gt;</code>", "<code>Origin: &lt;token&gt;</code>"],
            answer: 0,
            explain: "The token travels in the <code>Authorization</code> header using the Bearer scheme."
          },
          {
            type: "mcq",
            q: "Which type of relationship exists between the subject and its observers in the Observer pattern?",
            options: [
              "Many-to-one: many subjects notify one observer.",
              "One-to-one: each subject has exactly one observer.",
              "One-to-many: one subject notifies many observers.",
              "Many-to-many through a message broker."
            ],
            answer: 2,
            explain: "One subject keeps a list of observers and notifies all of them, so the relationship is one-to-many."
          },
          {
            type: "mcq",
            q: "Why is the Open-Closed Principle important in the Decorator pattern?",
            options: [
              "Classes should contain switch statements that open and close features.",
              "Decorators must be tightly coupled to the classes they wrap.",
              "A decorator may only be applied once to each object.",
              "New behaviour is added by writing new decorator classes, without modifying existing classes."
            ],
            answer: 3,
            explain: "Decorator extends behaviour by adding new wrapper classes while the original classes stay unchanged."
          },
          {
            type: "mcq",
            q: "Which feature is essential when implementing the Singleton pattern in Java?",
            options: [
              "A private constructor and a static method that returns the single instance.",
              "A public constructor that callers use to create new instances.",
              "An abstract method that every subclass must implement.",
              "A list of observers that are notified when the object changes."
            ],
            answer: 0,
            explain: "The private constructor blocks outside instantiation, and the static method provides controlled access to the instance."
          },
          {
            type: "mcq",
            q: "Choose the statement that is FALSE about the SOLID principles.",
            options: [
              "The Single Responsibility Principle states that a class should have only one reason to change.",
              "The Open-Closed Principle states that software entities should be open for extension but closed for modification.",
              "The Dependency Inversion Principle states that high-level modules should depend on low-level modules.",
              "The Interface Segregation Principle prefers small, client-specific interfaces."
            ],
            answer: 2,
            explain: "This statement is false. DIP says high-level modules should not depend on low-level modules; both should depend on abstractions."
          },
          {
            type: "mcq",
            q: "A <code>Square</code> class extends <code>Rectangle</code>. When code sets the width of a <code>Square</code>, its height also changes, so code written for <code>Rectangle</code> produces wrong results when given a <code>Square</code>. Which principle is violated?",
            options: ["Single Responsibility Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Dependency Inversion Principle"],
            answer: 1,
            explain: "LSP is violated because <code>Square</code> cannot substitute for <code>Rectangle</code> without breaking expectations."
          },
          {
            type: "mcq",
            q: "In a Spring Boot REST controller, which annotation binds a value from the URL path, such as the id in <code>/api/students/{id}</code>, to a method parameter?",
            options: ["<code>@RequestBody</code>", "<code>@RequestParam</code>", "<code>@Entity</code>", "<code>@PathVariable</code>"],
            answer: 3,
            explain: "<code>@PathVariable</code> reads a template variable from the URL path."
          },
          {
            type: "mcq",
            q: "In the Observer pattern, which method does the subject typically call to inform all registered observers of a change?",
            options: ["<code>notifyObservers()</code>", "<code>attach()</code>", "<code>detach()</code>", "<code>build()</code>"],
            answer: 0,
            explain: "<code>notifyObservers()</code> loops over the registered observers and calls their update method."
          },
          {
            type: "mcq",
            q: "Which of the following statements about the Adapter and Bridge patterns is TRUE?",
            options: [
              "Bridge makes existing, incompatible interfaces work together, while Adapter separates an abstraction from its implementation.",
              "Adapter makes existing, incompatible interfaces work together, while Bridge separates an abstraction from its implementation so that both can vary independently.",
              "Adapter and Bridge are the same pattern with different names.",
              "Bridge is a creational pattern used to create families of objects."
            ],
            answer: 1,
            explain: "Adapter fixes an interface mismatch. Bridge designs two independent dimensions up front so both can vary."
          },
          {
            type: "mcq",
            q: "In a Spring Security configuration, which rule restricts all URLs under <code>/api/admin/</code> to users with the ADMIN role?",
            options: [
              "<code>.requestMatchers(\"/api/admin/**\").permitAll()</code>",
              "<code>.anyRequest().permitAll()</code>",
              "<code>.csrf(csrf -> csrf.disable())</code>",
              "<code>.requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")</code>"
            ],
            answer: 3,
            explain: "<code>hasRole(\"ADMIN\")</code> on the matcher restricts those URLs to authenticated ADMIN users."
          },
          {
            type: "mcq",
            q: "A coffee is created with <code>new Milk(new Sugar(new Coffee()))</code>, where Milk and Sugar are decorators. When the client calls <code>cost()</code> on this object, whose <code>cost()</code> method is called first?",
            options: [
              "Sugar, because it is the middle object.",
              "Coffee, because it is the original object.",
              "Milk, because it is the outermost decorator.",
              "All three are called at the same time."
            ],
            answer: 2,
            explain: "The outermost decorator receives the call first, then delegates inward to Sugar and finally Coffee."
          },
          {
            type: "mcq",
            q: "What is the key difference between the Strategy and Decorator patterns?",
            options: [
              "Strategy is a creational pattern, while Decorator is a behavioural pattern.",
              "Strategy swaps the algorithm an object uses, while Decorator wraps an object to add behaviour while keeping the same interface.",
              "Decorator can only be applied once, while Strategy can be applied many times.",
              "There is no difference; they are two names for the same pattern."
            ],
            answer: 1,
            explain: "Strategy changes which algorithm is used. Decorator keeps the same interface and layers extra behaviour around the object."
          },
          {
            type: "mcq",
            q: "In Spring Security 6, which bean replaces extending the removed <code>WebSecurityConfigurerAdapter</code> class?",
            options: ["<code>SecurityFilterChain</code>", "<code>AuthenticationManagerBuilder</code>", "<code>HttpSecurityAdapter</code>", "<code>WebMvcConfigurer</code>"],
            answer: 0,
            explain: "Spring Security 6 configures a <code>SecurityFilterChain</code> bean instead of extending the removed adapter class."
          }
        ]
      }
    ]
  }
};
